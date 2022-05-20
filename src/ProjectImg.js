// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions, Grid, Item } from '@mui/material';

// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// export default function ProjectImages(props) {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }}>
//       {portfolioArray.map((props) => (
//         <ImageListItem key={props.img}>
//           <img
//             src={`${props.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={props.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={props.title}
//             subtitle={<span>by: {props.author}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// <Card sx={{ maxWidth: 345 }}>
//   <CardActionArea>
//     <CardMedia
//       component="img"
//       height="140"
//       image={props.portfolioArray.img}
//       alt="green iguana"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {props.portfolioArray.name}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Lizards are a widespread group of squamate reptiles, with over 6,000
//         species, ranging across all continents except Antarctica
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Github
//     </Button>
//   </CardActions>
// </Card>
