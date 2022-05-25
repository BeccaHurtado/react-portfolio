
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, Card, IconButton, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'


export default function Portfolio() {
    const itemData = [
        {
            title: 'Fav-Dash',
            github: 'https://github.com/Hadasss/favdash',
            author: 'Rebecca, David, Hadas, and Christian',
            description: 'A web based favorites dashboard to save links from the web. Applying MVC paradigm: routing with express for the backend, express handlebars to view the frontend and sequelize for database handling.',
            img: './images/dashboard.png'
        },
        {
            title: 'JavaScript Quiz',
            github: 'https://github.com/BeccaHurtado/javascript-quiz',
            author: 'Rebecca',
            description: 'Goal was to build a timed coding quiz with multiple-choice questions. The app will run in the browser, and will feature dynamically updated HTML and CSS powered by Javascript code.',
            img: './images/javascript-quiz.jpeg'
        },
        {
            title: 'Moveies',
            github: 'https://github.com/CWMasters/moveiesfinal',
            author: 'Rebecca, Chris, and Kiri',
            description: 'To allow the User to search any Year in order to display the top 5 movies from said year, 5 upcoming most anticipated Movies and an addition of a fun/random activity to take part in while you watch (or at any time) at just the click of a button.',
            img: './images/moveies.png'
        },
        {
            title: 'Team Profile Generator',
            github: 'https://github.com/BeccaHurtado/team-profile-generator',
            author: 'Rebecca',
            description: 'Generates an HTML webpage that displays summaries of each employee. User answers questions in the command-line to insert new employees. Once the user is done inputting employees, they can choose "Exit" as an option and a HTML file will be created.',
            img: './images/team-portfolio.png'
        },
        {
            title: 'Weather Dashboard',
            github: 'https://github.com/BeccaHurtado/weather-dashboard',
            author: 'Rebecca',
            description: 'The weather dashboard presents the weather of the current day along with the forecast for the next five days. Previous searches are also saved to localStorage.',
            img: './images/weather-dashboard.png'
        },
        {
            title: 'Workday Scheduler',
            github: 'https://github.com/BeccaHurtado/work-day-scheduler',
            author: 'Rebecca',
            description: 'Planner allows user to input tasks in the time slots which are then saved in local storage. Tasks are also color coded to show whether they are in the past, present, or future.',
            img: './images/workday-scheduler.jpeg'
        },
    ]

    return (
        <div>
            <Typography variant="h2" align="center">My Portfolio</Typography>
            <Grid container alignItems="center" justifyContent="center" columns={16} spacing={2}>
                    {itemData.map((item) => (
                <Grid item  key={item}>
                    <itemData>
                        <Card sx={{ maxWidth: 345 }}>
                         
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                         
                            <CardActions>
                                <a href={item.github}>
                                <Button size="small" color="primary">
                                    Github
                                </Button>
                                </a>
                            </CardActions>
                        </Card>
                    </itemData>
                </Grid>
                    ))}
            </Grid>
        </div>
    );
}


