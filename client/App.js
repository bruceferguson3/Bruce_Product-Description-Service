import React from 'react'
import axios from 'axios'
import TopPackage from "./Components/TopPackage.jsx";
import MiddlePackage from "./Components/MiddlePackage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            productId: '',
            productName: '',
            productDescr: '',
            productPrice: '',
            productReviewAvg: '',
            productReviewCounter: '',
            productBenefit: '',
            productSizeOpt: '',
            productColorOpt: '',
            productOnSale: 0,
            productNew: 0,
            productQuantity: 1
        };

        this.incQuantityCount = this.incQuantityCount.bind(this);
        this.decQuantityCount = this.decQuantityCount.bind(this);
    }

    incQuantityCount() {
       let productQuant = this.state.productQuantity;
       this.setState({productQuantity: productQuant+1})
    }

    decQuantityCount() {
        let productQuant = this.state.productQuantity;
        this.setState({productQuantity: productQuant-1})
    }

    componentDidMount() {
        axios.get('/displayProduct')
            .then((productInfo) => {
                console.log('GOT THE PRODUCT');
                console.log(productInfo.data[0].onSale);
                console.log(productInfo.data[0].new);
                this.setState({productId: productInfo.data[0].id,
                                     productName: productInfo.data[0].name,
                                     productDescr: productInfo.data[0].miniDescription,
                                     productPrice: productInfo.data[0].price,
                                     productReviewAvg: productInfo.data[0].reviewAvg,
                                     productReviewCounter: productInfo.data[0].reviewCount,
                                     productBenefit: productInfo.data[0].benefit,
                                     productSizeOpt: productInfo.data[0].size,
                                     productColorOpt: productInfo.data[0].color,
                                     productOnSale: productInfo.data[0].onSale,
                                     productNew: productInfo.data[0].new})
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className='mainContainer'>
                <TopPackage pName={this.state.productName}
                            pDescr={this.state.productDescr}
                            pPrice={this.state.productPrice}
                            pReviewAvg={this.state.productReviewAvg}
                            pReviewCounter={this.state.productReviewCounter}
                            pBenefit={this.state.productBenefit}
                            pOnSale={this.state.productOnSale}
                            pNew={this.state.productNew}/>

                <MiddlePackage pQuantity={this.state.productQuantity}
                               qInc={this.incQuantityCount}
                               qDec={this.decQuantityCount}/>
            </div>
        )
    }


}

export default App