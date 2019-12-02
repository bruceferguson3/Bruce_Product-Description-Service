import React from "react";


const MiddlePackage = (props) => {

    return (

        <div className='middlePackage'>
            <span className='quantityTitle'>Quantity</span>
            <div className='quantityBox'>
                <button className='decrQuant' disabled={true}>-</button>
                <span id='Quantity'>{props.pQuantity}</span>
                <button className='incQuant'>+</button>
            </div>
        </div>

    )

};

export default MiddlePackage