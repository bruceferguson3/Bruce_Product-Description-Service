// This component contains Product Heading (title, mini descr, price, rating Div)
// star image needs to come from data base... url https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg
import React from "react";

const TopPackage = (props) => {

    return (

        <div className='topPackage'>
            {props.pNew === 1 ? (<p className='newBox'>New</p>) : (<span hidden/>)}
            {props.pIkeaFamilySale === 1 ? (<p className='familyLabel'>IKEA Family Sale</p>) : (<span hidden/>)}
            <h1 className='productHeading'>{props.pName}</h1>
            <div className='productDescr'>{props.pDescr}</div>
            <div className='productPrice'>{props.pOnSale === 1 ? <span className='salePrice'>{`$${props.pPrice}`}</span> : `$${props.pPrice}`}</div>
            {props.pIkeaFamilySale === 1 ? (<p className='dealLenTag'>{props.pDealLen}</p>) : (<span hidden/>)}
            {props.pIkeaFamilySale === 1 ? (<p className='regPriceTag'>{props.pRegPrice}</p>) : (<span hidden/>)}
            <div className='productDescr'>
              <span className='starContainer'>
                  <span className='starColor'/>
                  <span className='star'/>
              </span>
              <span className='productDescrAvg'>{props.pReviewAvg < 0.1 ? '' : `${props.pReviewAvg}`}</span>
                <span className='productDescr'>{props.pReviewCounter !== 1 ? <a className='reviewPullDown'>{props.pReviewCounter} Reviews</a> :  <a className='reviewPullDown'>{props.pReviewCounter} Review}</a>}</span>
            </div>
            {props.pSoldSeparateMessage !== null ? (<div className='warningDiv'><span className='warningLogo logoProps'/><ul className='warningUl'><li className='warningli'>{props.pSoldSeparateMessage}</li></ul></div>) : (<span hidden/>)}
            <div className='benefitDescr'>
                {props.pBenefit !== null ? (<span>{props.pBenefit} <a className='readMore'> Read More </a></span>) : ''}
            </div>
        </div>

    )

};

export default TopPackage