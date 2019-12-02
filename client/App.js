import React from 'react'
import axios from 'axios'
import TopPackage from "./Components/TopPackage.jsx";
import MiddlePackage from "./Components/MiddlePackage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            productId: 3,
            productName: 'HAVSTEN',
            productDescr: 'Chair, in/outdoor, beige, 32 5/8x37x35 3/8 "',
            productPrice: 260.00,
            productReviewAvg: 5.0,
            productReviewCounter: 1,
            productBenefit: 'If you like the look, try how it feels. Generous seats, fluffy cushions as well as elastic mesh fabric make the sofa comfortable. Create your own combination, sit back and relax. Outdoors or indoors!',
            productSizeOpt: '',
            productColorOpt: '',
            productQuantity: 1
        }


    }

    componentDidMount() {
        axios.get('/displayProduct')
            .then((productInfo) => {
                console.log('GOT THE PRODUCT');
                console.log(productInfo.data);
                this.setState({productId: productInfo.data[0].id,
                                     productName: productInfo.data[0].name,
                                     productDescr: productInfo.data[0].miniDescription,
                                     productPrice: productInfo.data[0].price,
                                     productReviewAvg: productInfo.data[0].reviewAvg,
                                     productReviewCounter: productInfo.data[0].reviewCount,
                                     productBenefit: productInfo.data[0].benefit,
                                     productSizeOpt: productInfo.data[0].size,
                                     productColorOpt: productInfo.data[0].color})
            })
            .catch(() => {
                console.log('NO PRODUCT INFO')
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
                            pBenefit={this.state.productBenefit}/>

                <MiddlePackage pQuantity={this.state.productQuantity} />
            </div>
        )
    }


}

export default App