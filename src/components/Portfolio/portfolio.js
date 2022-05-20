// import React from "react";
// import ProjectImages from '../../ProjectImg';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material'


export default function About() {
    const itemData = [
        {
            title: 'Dashboard',
            github: 'abd',
            author: 'becca',
            description: 'lorem10',
            img: './images/dashboard.png'
        },
        {
            title: 'Dashboard',
            github: '',
            author: '',
            img: './images/javascript-quiz.jpeg'
        },
        {
            title: 'Dashboard',
            github: '',
            author: '',
            img: './images/moveies.png'
        },
        {
            title: 'Dashboard',
            github: '',
            author: '',
            img: './images/team-portfolio.png'
        },
        {
            title: 'Dashboard',
            github: '',
            author: '',
            img: './images/weather-dashboard.png'
        },
        {
            title: 'Dashboard',
            github: '',
            author: '',
            img: './images/workday-scheduler.jpeg'
        },
    ]

    return (
        <Box xs={{ flexGrow: 1 }}>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={1} sm={2} md={6} lg={12}>
                    <ImageList sx={{ width: 900, height: 600 }} cols={2} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    );
}

