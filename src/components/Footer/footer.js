import React from "react";
import { Container, Grid, Box, Paper , Typography} from '@mui/material'
import { red } from '@mui/material/colors'

const darkRed = red[300]
function Footer(){
    return(
        <footer>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 120,
          color: darkRed
        },
      }}
      alignItem="center"
      justifyContent="center"
    >
      <Paper align="center">
          <Typography className="resume-title" variant="h6">
              Rebecca Hurtado Olivera
          </Typography>
      </Paper>
    </Box>

        </footer>
    )
}


export default Footer;