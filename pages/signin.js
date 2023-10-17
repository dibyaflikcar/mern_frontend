import React, { useState } from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {authapi} from '../pages/service/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })


export default function signin() {

    const router = useRouter()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const onInputChange = (e) => {
        if(e.target.name=="username")
        {
            setUsername(e.target.value);
        }
        if(e.target.name=="password")
        {
            setPassword(e.target.value);
        }
    }
    const onInputSubmit=async (e)=>{
        const data={username ,password};
        if(username==''){
            setError("Enter Your Usename!");
        }
        else if(password==''){
            setError("Enter Your Password!");
        }
        else
        {
            setError("");
            // console.log("success :"+name +" "+email+" "+phone+" "+password);
            const response = await authapi.loginUser(data);
            // console.log(response.data.data.access_token);
            
            if (response.data.status === 200) {
                setUsername("");
                setPassword("");
                localStorage.setItem('token', response.data.data.access_token);
                router.push("/dashboard");
            }
            else
            {
                setError("Invalid Credentials!");
            }
        }
    }
    return (<>
        <Head>
            <title>Sign In</title>
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
                                    Sign In
                                </Typography>
                                <Typography style={{ color: "red" }}>{error}</Typography>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container direction="row" justifyContent="center"  alignItems="center" spacing={0}>
                                        <Grid item xs={12}>
                                            <TextField  name="username" onChange={onInputChange} label="Username" value={username} variant="standard" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField  name="password" onChange={onInputChange}  label="Password" value={password} variant="standard" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Stack spacing={2} direction="row">
                                         <Button variant="contained" onClick={onInputSubmit}>Submit</Button>
                                </Stack>
                            </CardActions>
                            <Typography>Not a member? <Link href="/signup">Signup</Link></Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </main>
    </>
    )
}
