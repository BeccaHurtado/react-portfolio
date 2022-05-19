// import React from "react";
import ProjectImages from '../../ProjectImg';
// import './portfolio.css'


// function Portfolio() {
//     const portfolioArray = [
//         {
//             name: 'Dashboard',
//             github: 'abd',
//             img: './images/dashboard.png'
//         },
//         {
//             name: 'Dashboard',
//             github: '',
//             img: './images/javascript-quiz.jpeg'
//         },
//         {
//             name: 'Dashboard',
//             github: '',
//             img: './images/moveies.png'
//         },
//         {
//             name: 'Dashboard',
//             github: '',
//             img: './images/team-portfolio.png'
//         },
//         {
//             name: 'Dashboard',
//             github: '',
//             img: './images/weather-dashboard.png'
//         },
//         {
//             name: 'Dashboard',
//             github: '',
//             img: './images/workday-scheduler.jpeg'
//         },
//     ]
//     return (
//         <section className="portfolio-background">
//             <h1>My Recent Work</h1>
//             <h2>Portfolio</h2>
//             <div className="container portfolio-container">
//                 {portfolioArray.map(entry => {
//                     return (<ProjectImages portfolioArray={entry}></ProjectImages>)
//                 })}
//             </div>
//         </section>
//     )
// }
// export default Portfolio;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function About() {
    const portfolioArray = [
                {
                    name: 'Dashboard',
                    github: 'abd',
                    img: './images/dashboard.png'
                },
                {
                    name: 'Dashboard',
                    github: '',
                    img: './images/javascript-quiz.jpeg'
                },
                {
                    name: 'Dashboard',
                    github: '',
                    img: './images/moveies.png'
                },
                {
                    name: 'Dashboard',
                    github: '',
                    img: './images/team-portfolio.png'
                },
                {
                    name: 'Dashboard',
                    github: '',
                    img: './images/weather-dashboard.png'
                },
                {
                    name: 'Dashboard',
                    github: '',
                    img: './images/workday-scheduler.jpeg'
                },
            ]
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={portfolioArray.map(entry => {
            return (<ProjectImages portfolioArray={entry}></ProjectImages>)
            })}
          alt="potfolio-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
