// import React from "react";
// import ProjectImages from '../../ProjectImg';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid, ListSubheader, IconButton} from '@mui/material'


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
    <div>
    <Grid container direction="column" alignItems="center" justifyContent="center" wrap="wrap">
    <Grid item >
        <ImageList sx={{ width: 500, height: 450 }} sm={12} md={12} lg={12}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                    <IconButton
                    x={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    >
                    <GitHubIcon />
                    </IconButton>
                    }
                    />
            </ImageListItem>
                ))}
        </ImageList>
    </Grid>
    </Grid>
    </div>
    );
}

