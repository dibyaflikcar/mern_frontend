import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/legacy/image'

export default function index(props) {

    var items = [
        {
            name: "Banner 1",
            description: "Probably the most random thing you have ever seen!",
            image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/7Ur33kU8Qr3SrlVnJW1ZreIsfhGOG1BtEzpII5AK.webp"
        },
        {
            name: "Banner 2",
            description: "Probably the most random thing you have ever seen!",
            image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/X56nOuYcgGxC7jLeZglpBSsLDia4WbAA2PuFGuZW.webp"
        },
        {
            name: "Banner 3",
            description: "Probably the most random thing you have ever seen!",
            image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/aN1GD7xzRpiqfrMpdPBaydKsDfvjWXCH96oWnnso.webp"
        },
        {
            name: "Banner 4",
            description: "Hello World!",
            image:"https://toofav.s3.ap-south-1.amazonaws.com/uploads/all/t2h5gipxiwVVeAggUKlhymJtDHbznbgBb9Kk7gfu.webp"
        }
    ]

  return (<>
        <Carousel navButtonsAlwaysInvisible={false} animation="slide" autoPlay={true} cycleNavigation timeout={300}> 
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
  </>
  )
}

function Item(props)
{
    return (
        <Paper>
            <Image
                alt={props.item.name}
                src={props.item.image}
                width={2250}
                height={400}
                layout="responsive"
            />
        </Paper>
    )
}
