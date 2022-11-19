import React from 'react';
import { ReactDOM } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import Dinosaur from '../../../public/assets/Dinosaur.jpg'
import FancyRate from '../../../public/assets/FancyRate.jpg'
import Telescope from '../../../public/assets/Telescope.jpg'
import WonderWoman from '../../../public/assets/WonderWoman.jpg'

const InterestCarousel = () => {
    var items = [
      {
        name: 'James Webb Telescope',
        image: Telescope,
        link1: 'https://webbtelescope.org/',
      },
      {
        name: 'Fancy Rats',
        image: FancyRate,
        link1: 'https://www.nfrs.org/'
      },
      {
        name: 'Paleontology',
        image: Dinosaur,
        link1: 'https://www.britannica.com/science/paleontology',
      },
      {
        name: 'Wonder Woman',
        image: WonderWoman,
        link1: 'https://dc.fandom.com/wiki/Wonder_Woman_(Diana_Prince)'
      },
    ];

  function Item(props) {
    return (
      <div>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={props.item.image}
              alt={props.item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={props.item.link1} target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div id="interestCarousel" style={{width:"500px"}}>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default InterestCarousel;
