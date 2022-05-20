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
            <Grid container columns={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <ImageList sx={{ width: 900, height: 550 }} cols={2} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem>
                                <img
                                    src={`${item.img}`}
                                    srcSet={`${item.img}`}
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

