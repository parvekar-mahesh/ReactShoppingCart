import { ListItem, ListItemAvatar, Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import Product from '../../app/models/Product';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import agent from '../../app/api/agent';
import { useStoreContext } from '../../app/context/StoreContext';

interface props
{
    product: Product;
}

function ProductCard(props: props) {
  
    const [loading, setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId: number, quantity = 1) {
        setLoading(true);
        agent.Basket.addItem(productId, quantity)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    };
  

  return (
    <>
  
      <Card>
          <CardHeader
              
              title={props.product.name}
              titleTypographyProps={{ 
                  sx: {fontWeight:'bold', color:'primary.main'}
              } }
              
              avatar={
              <Avatar> {props.product.name.charAt(0).toUpperCase()} </Avatar>
          }>
        
          </CardHeader>

      <CardMedia
        sx={{ height: 140, backgroundSize:'contain' }}
        image={props.product.pictureUrl}
        title={props.product.name}
          />
          
      <CardContent>
        
        <Typography gutterBottom  color='secondary' variant="h5" >
         $ {props.product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.product.brand} --  {props.product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton loading={loading}  onClick={()=> handleAddItem(props.product.id)} size="small" >AddToCart</LoadingButton>
        <Button component={Link} to={`/catalog/${props.product.id}`  }  size="small">View</Button>
      </CardActions>
      </Card>
      </>
  )
}

export default ProductCard
