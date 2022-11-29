import React from 'react';
import PropTypes from 'prop-types';


const Listing = ({title, currencyCode, price , img , url , quantity }) => {
  if(!title || !currencyCode){
    return null
  }

  let valut = {
    USD: '$',
    EUR: '€',
  }

  let classLevel = ['level-low', 'item-quantity'];

  if(quantity > 10 && quantity <= 20){
    classLevel = ['level-medium', 'item-quantity'];
  }else if(quantity > 20) {
    classLevel = ['level-high', 'item-quantity'];
  }

  return (
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={img.url_570xN}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {title && title.length > 50
              ? `${title.slice(0,50)}...`
              : title
            }
          </p>
          <p className="item-price">
            {valut[currencyCode] 
              ? 
              [valut[currencyCode], price].join(' ')            
              :
              [price, currencyCode].join(' ')  
            }
          </p>
          <p className={classLevel.join(' ')}>{quantity} left</p>
        </div>
      </div>
  )
}

Listing.propTypes = {
  title: PropTypes.string,
  currencyCode: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
  quantity: PropTypes.number
 };
 

export default Listing