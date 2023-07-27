import { Grid, List } from '@mui/material'
import Product from '../../app/models/Product';
import ProductCard from './ProductCard';

interface PropsType {
    products: Product[];
}
function ProductList(Props:PropsType) {
  return (
    <Grid container spacing={4}>
      {Props.products.map((product:any) => (
      <Grid item  xs={3}  key={product.id}>       
          <ProductCard  product={product} ></ProductCard>
      </Grid>
        
        ))}
    </Grid>
  )
}
export default ProductList
