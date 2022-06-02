import React from 'react'
import './about.css'
// import portrait from './portrait.png'
import Avatar from '@mui/material/Avatar'
import { Grid, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function About() {
    return (
        <div className="header">
           <Grid container alignItems="center" justifyContent="center" direction="column" spacing={5} className="container">
               <Grid item >
                <Avatar
                className="portrait"
                alt="Rebecca Hurtado"
                src="./images/portrait.jpg"
                sx={{ width: 250, height: 250 }}
                />
               </Grid>

               <Grid item >
               <Stack spacing={2} direction="row" className="icons">
                <Avatar >
                    <GitHubIcon/>
                </Avatar>
                <Avatar>
                    <LinkedInIcon/>
                </Avatar>
                <Avatar>
                    <AlternateEmailIcon/>
                </Avatar>
                </Stack>
               </Grid>   
           </Grid>
           <Typography align="center" variant="h2">
               Rebecca Hurtado
           </Typography>
           <Typography align="center" variant="h3" className="description">
               A Full Stack Web Developer from Arizona!
           </Typography>
        </div>
    )
}

export default About;