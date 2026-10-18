import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Data';

export const ProdDetails = () => {
    const { id } = useParams();

    const prod = products.find( (prod) => prod.id === Number(id) ) 
    
    return (
    <div>
        <p>Prod ID: {id}</p>
        <p>{prod?.name}</p>
        <p>{prod?.category}</p>
        <p>{prod?.description}</p>
        <img src={prod?.image}/>

    </div>
  )
}

  


