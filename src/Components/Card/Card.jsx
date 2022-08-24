import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import axios from "axios";

//COMPONENTS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '../Modal/Modal';

//ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import ComputerIcon from '@mui/icons-material/Computer';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

//THEME PROVIDER
import { createTheme, ThemeProvider } from '@mui/material/styles';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme = createTheme({
  typography: {
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //PRODUCT DETAILS
  const id = props.id;
  const image = props.image;
  const name = props.title;
  const price = props.price;
  const type = props.type;
  const quantity = 1;
  const description = { name, price, image, quantity, type };

  console.log('props image:', props.image);
  const src = JSON.stringify(props.image);
  console.log('src image:', src);

  //DELETE product
  const handleClickDelete = () => {
    alert('Deleted successfully');
    axios
      .delete(`http://localhost:8080/products/${props.type}/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  }

  //Open Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{
        maxWidth: 345, marginTop: '30px', marginLeft: '20px', backgroundColor: '#e0edf4',
        borderRadius: '10px'
      }}>
        <CardHeader
          avatar={
            props.type === 'computers' ?
              <ComputerIcon /> : (props.type === 'drones' ?
                <PrecisionManufacturingIcon /> : (props.type === 'smartphones' ?
                  <SmartphoneIcon /> : (props.type === 'tablets' ?
                    <TabletIcon /> : (props.type === 'newitems' ?
                      <NewReleasesIcon /> : null))))
          }
          title={props.title}
          subheader="Available"
        />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Gadget"
        />
        <CardContent>
          <ThemeProvider theme={theme}>
            <Typography>
              {props.description}
              Price: ${props.price}
            </Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Edit">
            <EditIcon onClick={handleOpen} />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon onClick={handleClickDelete} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>About this item:</Typography>
            <Typography paragraph>
              {/*
              props.specs.map((spec) => {
                return (
                  <>
                    <li key={spec} >{spec.spec}</li>
                  </>
                )
              })
            */}
              <li key={props.spec1}>{props.spec1}</li>
              <li key={props.spec2}>{props.spec2}</li>
              <li key={props.spec3}>{props.spec3}</li>
              <li key={props.spec4}>{props.spec4}</li>
              <li key={props.spec5}>{props.spec5}</li>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Modal
        id={props.id}
        image={props.image}
        title={props.title}
        price={props.price}
        type={props.type}
        description={props.description}
        spec1={props.spec1}
        spec2={props.spec2}
        spec3={props.spec3}
        spec4={props.spec4}
        spec5={props.spec5}
        open={open} handleOpen={handleOpen} handleClose={handleClose}
       />
    </>
  );
}