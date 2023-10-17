import React , { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Divider from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import {productapi} from '@/pages/service/product';



export default function index() {
  const [list, setListing] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts = async () => {
    const response = await productapi.getProducts();
    // console.log(response.data);
    if (response.status === 200 ) {
      setListing(response.data.products);
    }
  };
  
  
return (<>
  <Box sx={{ pt: 10 }}>
    <Typography variant="h6" component="h6">All Products</Typography>
  </Box>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {list.map((product, index) => {
        return (
          <Grid item xs={3}>
          <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.thumbnail}
            title="green iguana"
          />
          <CardContent>
            <Link href={{pathname: '/products/[id]',query: { id: product.id } }}><Typography gutterBottom variant="h5" component="div">
            {product.title}
            </Typography></Link>
            <Typography>$ {product.price}</Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
          </Grid>
          
        );
  })}
      </Grid>
  </Box> 
</>
)
}




