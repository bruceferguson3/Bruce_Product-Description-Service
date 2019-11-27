import React from 'react'
import TopPackage from "./Components/TopPackage.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            productId: '',
            productName: 'HAVSTEN',
            productDescr: 'Chair, in/outdoor, beige, 32 5/8x37x35 3/8 "',
            productPrice: '$260.00',
            productReviewAvg: '5.0',
            productReviewCounter: 1,
            productBenefit: 'If you like the look, try how it feels. Generous seats, fluffy cushions as well as elastic mesh fabric make the sofa comfortable. Create your own combination, sit back and relax. Outdoors or indoors!'
        }


    }

    render() {
        return (
            <div className='mainContainer'>
                    <TopPackage pName={this.state.productName}
                                pDescr={this.state.productDescr}
                                pPrice={this.state.productPrice}
                                pReviewAvg={this.state.productReviewAvg}
                                pReviewCounter={this.state.productReviewCounter}/>
            </div>
        )
    }


}

export default App