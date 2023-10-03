import React, { useEffect, useState } from 'react'
import Product from "../../app/models/Product"
import { Avatar, Button, List, ListItem, ListItemAvatar } from '@mui/material'
import ProductList from './ProductList'
import agent from '../../app/api/agent';



function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() =>
  // {
  //  agent.Catalog.list().then(products=> setProducts(products))
    
  // },[]
  // )


  useEffect(()=>
  {
    fetch('http://localhost:5000/api/Products')
    .then(response=> response.json())
    .then(data=> setProducts(data))
  }, [])
    return (
      <>
            <ProductList products={products}></ProductList>          
            {/* <Button onClick={props.AddProductFunction}>Add Products</Button> */}
      </>
  )
}

export default Catalog
