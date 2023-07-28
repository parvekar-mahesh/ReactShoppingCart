import { ListItem, ListItemAvatar, Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@mui/material'
import React from 'react'
import Product from '../../app/models/Product';
import { Link } from 'react-router-dom';

interface props
{
    product: Product;
}

function ProductCard(props:props) {
  return (
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
        <Button size="small">AddToCart</Button>
        <Button component={Link} to={`/catalog/${props.product.id}` }  size="small">View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
