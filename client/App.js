import React from 'react'
import axios from 'axios'
import TopPackage from "./Components/TopPackage.jsx";
import MiddlePackage from "./Components/MiddlePackage.jsx";
import LastPackage from "./Components/LastPackage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: '',
            productName: '',
            productDescr: '',
            productPrice: '',
            productDealLen: '',
            productRegPrice: '',
            productReviewAvg: 0,
            productReviewCounter: 0,
            productBenefit: '',
            productSizeOpt: '',
            productColorOpt: '',
            productMattressOpt: '',
            productLegsOpt: '',
            productSlattedBedBaseOpt: '',
            productIkeaFamilySale: 0,
            productOnSale: 0,
            productNew: 0,
            productNotQuitePerfectBox: 0,
            productAvaliableForDelivery: 0,
            productAssembly: 0,
            productSoldSeparateMessage: '',
            productQuantity: 1,
            shoppingCartVal: 0
        };

        this.incQuantityCount = this.incQuantityCount.bind(this);
        this.decQuantityCount = this.decQuantityCount.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.recordShoppingCartVal = this.recordShoppingCartVal.bind(this);
        this.displayDeliveryDrawer = this.displayDeliveryDrawer.bind(this);
        // this.onHoverColorChange = this.onHoverColorChange.bind(this);
        this.changeWidthOnStars = this.changeWidthOnStars.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.scrollToReviewDrawer = this.scrollToReviewDrawer.bind(this);
    }

    incQuantityCount() {
       let productQuant = this.state.productQuantity;
       this.setState({productQuantity: productQuant+1})
    }

    decQuantityCount() {
        let productQuant = this.state.productQuantity;
        this.setState({productQuantity: productQuant-1})
    }

    displayModal(id) {
        //console.log('DISPLAYING MODEL');
        document.getElementById(id).style.display = 'flex'
    }

    closeModal(id) {
        //console.log('CLOSING MODEL');
        document.getElementById(id).style.display = 'none'
    }

    displayDeliveryDrawer() {
        if (document.getElementById('b_deliveryHiddenDiv').style.display === 'none') {
            document.getElementById('b_deliveryHiddenDiv').style.display = 'flex';
        } else {
            document.getElementById('b_deliveryHiddenDiv').style.display = 'none'
        }
    }

    recordShoppingCartVal() {
       //console.log(Number(document.getElementById('Quantity').innerText));
       let numToAdd = Number(document.getElementById('b_Quantity').innerText);
       this.setState({shoppingCartVal: this.state.shoppingCartVal + numToAdd}, () => {
           window.dispatchEvent(
               new CustomEvent('cartUpdated', {
                   detail: {
                       cartCount: this.state.shoppingCartVal
                   }
               })
           )
       });
    }

    // onHoverColorChange(e) {
    //     e.target.style.backgroundColor = 'lightgrey'
    // }

    changeWidthOnStars() {
        let newSizePercent = this.state.productReviewAvg * 20;
        document.getElementById('b_starColorID').style.width = `${newSizePercent}%`
    }

    scrollToReviewDrawer() {
        document.body.scrollTop = 1350;
        document.documentElement.scrollTop = 1350;
    }


    newReview(newReviewRating) {
        let productCounter = this.state.productReviewCounter;
        let totalReviewRating = this.state.productReviewAvg * this.state.productReviewCounter;
        console.log(totalReviewRating);
        this.setState({productReviewCounter: productCounter + 1}, () => {
            let newReviewRatingTotal = totalReviewRating + newReviewRating.newRating;
            console.log(newReviewRatingTotal);
            let newReviewAvg = (newReviewRatingTotal / this.state.productReviewCounter).toFixed(1);
            this.setState({productReviewAvg: newReviewAvg}, () => {
                axios.patch('/updateReviewInfo', { newReviewCount: this.state.productReviewCounter, newReviewAvg: this.state.productReviewAvg, productId: this.state.productId}, { baseURL: 'http://ikeaproducts.us-east-2.elasticbeanstalk.com'})
                    .then((newReviewInfo) => {
                        console.log('Heres the data!');
                        console.log(newReviewInfo.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        });
    }



    updatePage(id) {
        axios.get(`/displayProduct/${id}`, { baseURL: 'http://ikeaproducts.us-east-2.elasticbeanstalk.com'})
            .then((productInfo) => {
                this.setState({productId: productInfo.data[0].id,
                    productName: productInfo.data[0].name,
                    productDescr: productInfo.data[0].miniDescription,
                    productPrice: productInfo.data[0].price.toFixed(2),
                    productDealLen: productInfo.data[0].dealLen,
                    productRegPrice: productInfo.data[0].regPrice,
                    productReviewAvg: productInfo.data[0].reviewAvg.toFixed(1),
                    productReviewCounter: productInfo.data[0].reviewCount,
                    productBenefit: productInfo.data[0].benefit,
                    productSizeOpt: productInfo.data[0].size,
                    productColorOpt: productInfo.data[0].color,
                    productMattressOpt: productInfo.data[0].mattress,
                    productLegsOpt: productInfo.data[0].legs,
                    productSlattedBedBaseOpt: productInfo.data[0].slattedBedBase,
                    productIkeaFamilySale: productInfo.data[0].ikeaFamilySale,
                    productOnSale: productInfo.data[0].onSale,
                    productNew: productInfo.data[0].new,
                    productNotQuitePerfectBox: productInfo.data[0].notQuitePerfect,
                    productAvaliableForDelivery: productInfo.data[0].avaliableForDelivery,
                    productAssembly: productInfo.data[0].assembly,
                    productSoldSeparateMessage: productInfo.data[0].soldSeparate,
                    productQuantity: 1}, () => {
                    this.changeWidthOnStars();

                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.updatePage(3);
        window.addEventListener('productChanged', (event) => {
            this.setState({
                productId: event.detail.productId,
            }, () => {
                this.updatePage(this.state.productId)
            });
        });
        window.addEventListener('newReview', (event) => {
                this.newReview(event.detail)
        });
    }


    render() {
        return (
            <div className='b_mainContainer'>
                <TopPackage
                    pId={this.state.productId}
                    pName={this.state.productName}
                    pDescr={this.state.productDescr}
                    pPrice={this.state.productPrice}
                    pDealLen={this.state.productDealLen}
                    pRegPrice={this.state.productRegPrice}
                    pReviewAvg={this.state.productReviewAvg}
                    pReviewCounter={this.state.productReviewCounter}
                    pBenefit={this.state.productBenefit}
                    pSizeOpt={this.state.productSizeOpt}
                    pColorOpt={this.state.productColorOpt}
                    pMattressOpt={this.state.productMattressOpt}
                    pLegsOpt={this.state.productLegsOpt}
                    pSlattedBedBaseOpt={this.state.productSlattedBedBaseOpt}
                    pIkeaFamilySale={this.state.productIkeaFamilySale}
                    pOnSale={this.state.productOnSale}
                    pNew={this.state.productNew}
                    pSoldSeparateMessage={this.state.productSoldSeparateMessage}
                    displayModal={this.displayModal}
                    closeModal={this.closeModal}
                    onHoverChangeColor={this.onHoverColorChange}
                    scrollToReviewDrawer={this.scrollToReviewDrawer}
                />

                <MiddlePackage
                    pQuantity={this.state.productQuantity}
                    qInc={this.incQuantityCount}
                    qDec={this.decQuantityCount}
                    pNotQuitePerfectBox={this.state.productNotQuitePerfectBox}
                    recordShoppingCartVal={this.recordShoppingCartVal}
                />

                <LastPackage
                    pAvaliableForDelivery={this.state.productAvaliableForDelivery}
                    pAssembly={this.state.productAssembly}
                    displayDeliveryDrawer={this.displayDeliveryDrawer}
                />

            </div>

        )
    }


}

export default App