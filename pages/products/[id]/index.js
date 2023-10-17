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
import { useRouter } from 'next/router';
import {productapi} from '@/pages/service/product';
import Chip from '@mui/material/Chip';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/legacy/image'



export default function index(props) {
  const router = useRouter()
  const [product, setProduct] = useState([]);
  const [items, setItem] = useState([]);

//   var items = [
//     {
//         name: "Banner 1",
//         description: "Probably the most random thing you have ever seen!",
//         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/7Ur33kU8Qr3SrlVnJW1ZreIsfhGOG1BtEzpII5AK.webp"
//     },
//     {
//         name: "Banner 2",
//         description: "Probably the most random thing you have ever seen!",
//         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/X56nOuYcgGxC7jLeZglpBSsLDia4WbAA2PuFGuZW.webp"
//     },
//     {
//         name: "Banner 3",
//         description: "Probably the most random thing you have ever seen!",
//         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/aN1GD7xzRpiqfrMpdPBaydKsDfvjWXCH96oWnnso.webp"
//     },
//     {
//         name: "Banner 4",
//         description: "Hello World!",
//         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/t2h5gipxiwVVeAggUKlhymJtDHbznbgBb9Kk7gfu.webp"
//     }
// ]

  
  useEffect(() => {
      if (router.isReady) {
        getproductDetails(router.query.id);
      }
  }, [router]);
  
const getproductDetails = async (id) => {
    // console.log(id);
    const response = await productapi.getproductDetails(id);
    // console.log(response.data);
    if (response.status === 200 ) {
        setProduct(response.data);
        setItem(response.data.images);
    }
  };

  
  
return (<>
  <Box sx={{ pt: 10 }}>
    <Typography variant="h6" component="h6">Product Details </Typography>
  </Box>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="row" justifyContent="center"  alignItems="center" spacing={2}>
          <Grid item xs={4}>
          <Carousel navButtonsAlwaysInvisible={false} animation="slide" autoPlay={true} cycleNavigation timeout={300}> 
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.title}
            </Typography>
            <Typography>${product.price}  </Typography>
            <Chip label={product.discountPercentage} color="primary" /> %off
            <Typography>{product.stock} In stock</Typography>
            <Typography variant="body2" color="text.secondary">{product.description}</Typography>
          </CardContent>
        </Card>
          </Grid>
      </Grid>
  </Box>
 
</>
)
}


function Item(props)
{
    return (
        <Paper>
            <Image
                alt="Image"
                src={props.item}
                width={50}
                height={50}
                layout="responsive"
            />
        </Paper>
    )
}




