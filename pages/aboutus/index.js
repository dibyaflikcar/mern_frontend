import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Inter } from 'next/font/google'
import styles from '../../styles/Home.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {authapi} from '../../pages/service/auth';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })


export default function index() {
    const router = useRouter()
    const [userData ,setUserData]=useState([]);
    const [imageFile, setImagefile]=useState([]);
    useEffect(() => {
        const userToken = localStorage.getItem('token');
        if(!userToken) {
            router.push("/");
        }
          getUserData();
    }, []);

const getUserData = async () => {
    // console.log(id);
    const response = await authapi.getUser();
    // console.log(response.data);
    if (response.data.status === 200 ) {
        setUserData(response.data.data);
    }
    };

const onFileupload=async (e)=>{
    if (e.target.name === 'image' && e.target.files.length > 0) {
        // setImagefile([...imageFile, e.target.files[0]]);
        setImagefile(e.target.files[0]);
        // console.log(e.target.files[0]);
      }
    // setImagefile(e.target.files[0]);
    
    const data=imageFile;
    const response = await authapi.uploadFile(data);
    console.log(response);
}


    return (<>
        <Head>
            <title>About Us</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row" justifyContent="center"  alignItems="center" spacing={2}>
                    <Grid item xs={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                    About Us
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </main>
    </>
    )
}
