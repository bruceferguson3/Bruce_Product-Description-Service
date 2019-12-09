import React from "react";


const LastPackage = (props) => {

    return (

        <div className='lastPackage'>
            <div className='deliveryBox'>{props.pAvaliableForDelivery === 1
                ? (<div>

                    <button>
                        Avaliable for delivery
                    </button>

                   </div>)
                : null}
            </div>
            <div className='findStoreBox'><span>Check at your local store</span></div>
            <div className='assemblyBox'>{props.pAssembly === 1 ? (<span>Assembly</span>) : null}</div>
        </div>

    )

};

export default LastPackage