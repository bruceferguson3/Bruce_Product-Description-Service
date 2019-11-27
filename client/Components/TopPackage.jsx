// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from "react";

const TopPackage = (props) => {

    return (

        <div className='topPackage'>
            <h1 className='productHeading'>{props.pName}</h1>
            <div className='productDescr'>{props.pDescr}</div>
            <div className='productHeading'>{props.pPrice}</div>
            <div className='productDescr'>
              <span className='starContainer'>
                  <span className='starColor'/>
                  <span className='star'/>
              </span>
              <span className='productDescr'>{props.pReviewAvg}</span>
              <span className='productDescr'>{props.pReviewCounter} Review</span>

            </div>
        </div>

    )

};

export default TopPackage