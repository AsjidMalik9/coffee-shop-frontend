import React, { useEffect, useState } from 'react'
import GetItems from './helpers/getItems';
import GetDeals from './helpers/getDeals';
import Item from './components/Item';
import Deal from './components/Deal';

export default function Index() {
  const [items, setItems] = useState([]);
  const [deals, setDeals] = useState([]);

  useEffect(()=>{
    GetItems().then(response => {
      setItems(response.data)
    });

    GetDeals().then(response => {
      setDeals(response.data)
    });
  }, []);
  return (
    <>
      <div className='row'>{items?.map(item => <Item key={item.id} item={item} />)}</div>
      <h1> Deals </h1>
      <div className='row'>{deals?.map(deal => <Deal key={deal.id} deal={deal} />)}</div>
    </>
  )
}
