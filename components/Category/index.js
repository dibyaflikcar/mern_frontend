import React,{useEffect ,useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/legacy/image';
import { Typography } from '@mui/material';
import {productapi} from '@/pages/service/product';
import Link from 'next/link';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function index(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getCategories();
      }, []);
      
    
      const getCategories = async () => {
        const response = await productapi.getCategories();
        // console.log(response.data);
        if (response.status === 200 ) {
            setItems(response.data);
        }
      };

    // var items = [
    //     {
    //         name: "Electronics",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/DDtSUDUGNQflw65Ojr08OwQ1eoShIfdh847Ky0pJ.webp"
    //     },
    //     {
    //         name: "Fashion",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/WkZKAanMUwHHhwald2b1vGHW2UTArBoCF7kswgsL.webp"
    //     },
    //     {
    //         name: "Mobile & Accessores",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/j8XEq7wK9CeFMXzQXvpuTJo85uYaoJMe2g4bDuim.webp"
    //     },
    //     {
    //         name: "Home & Kitchen",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/uZmvUFXX9QPFG4q7GhqwoDGDO2uf06TEjIGNAJDf.webp"
    //     },
    //     {
    //         name: "Beauty & Personal Care",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/hjXljRROiPoaO47i882MLTO2vVWrhRIHEnzX6DmT.webp"
    //     },
    //     {
    //         name: "Toy & Games",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/n1gFUzohskQJWNwrGE1dnh1HJHVOgSeNnGLwDRNC.webp"
    //     },
    //     {
    //         name: "Sports & Books",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/byjmCiTrmdtTdeIc2OkdLmFzfyaxuN7xSGyBU4yr.webp"
    //     },
    //     {
    //         name: "Sports",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/e6lGtgyn8IbYICeZ94InSRRMc1RzRg1m9ZYSjnzj.webp"
    //     },
    //     {
    //         name: "Travel",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/JjjealoFzfwUMnE2g4PypOEcn0O7I1RdpuPdcfht.webp"
    //     },
    //     {
    //         name: "Potty Training",
    //         image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/pjoGfJ87ioU3MiCRapHtdNKtBKspVRdAykh2dfCe.webp"
    //     },
    // ]

  return (<>
  <div>
  <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType="mobile"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{
    items.map( (item, i) => <Item key={i} item={item} /> )
}
  
</Carousel>
</div>
  </>
  )
}


function Item(props)
{
    return (
        <div><Image
                alt={props.item}
                src="https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/DDtSUDUGNQflw65Ojr08OwQ1eoShIfdh847Ky0pJ.webp"
                width={30}
                height={30}
                layout="responsive"
            />
            <Link href={{pathname: '/categories/[id]',query: { id: props.item } }}><Typography variant="h6" component="h6">{props.item}</Typography></Link>
        </div>
    )
}
