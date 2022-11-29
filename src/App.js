import React, { useEffect, useState } from 'react';
import './App.css';
import useFetching from './hooks/useFetching';
import ProdustxService from './API/ProdustxService';
import Listing from './components/Listing';

function App() {

  const [products, setProducts] = useState([]);

  const productsData = useFetching( async () =>  {
    const response = await ProdustxService.getAllProducts();
    setProducts(response);
  })

  useEffect(  () => {
    productsData()
  }, [])

  return (
    <div className="wrapper">
      <div className="item-list">
        {products.map((item) => 
          <Listing 
            key={item.listing_id} 
            title={item.title} 
            currencyCode = {item.currency_code} 
            price={item.price}
            img={item.MainImage}
            url={item.url}
            quantity = {item.quantity}
          />
        )}
      </div>
    </div>
  );
}

export default App;
