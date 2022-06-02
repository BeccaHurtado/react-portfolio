import React from "react";
import { Box, Paper, Typography, Tabs, Tab, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { red } from '@mui/material/colors'
import resume from './resume.pdf'
import './resume.css'


function Resume(){
    
    const color = red[200]
    return(
    <div className="contianer">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 128,
        },
      }}
      alignItem="center"
      justifyContent="center"
    >
      <Paper elevation={12} align="center">
          <Typography className="resume-title" variant="h4">
              Full Stack Web Developer Resume
          </Typography>
      </Paper>
    </Box>

    <Typography variant="h3" align="center" sx={{color: 'white'}}>
        Current Skills
    </Typography>

      <div align="center">
        <a href={resume} download="beccas-resume" className="download-link">
            <Button variant="contained" color="warning">Download</Button>
        </a>
      </div>

    <div align="center" className="list-padding">
    <List sx={{ width: '25%',  color: "white", bgcolor: color}}>
      <ListItem>
        <ListItemText primary="HTML" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="CSS" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="JavaScript" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="Bulma" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="Bootstrap" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="Material UI" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="PWA" align="center"/>
      </ListItem>

      <ListItem>
        <ListItemText primary="SQL" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="JQuery" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Mongoose" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Sequelize" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="MongoDB" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="GraphQL" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Node.js" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="React.js" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="REST API's" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Handlebars" align="center"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="Express.js" align="center"/>
      </ListItem>

    </List>
    </div>
    
    </div>
    )
}


export default Resume;