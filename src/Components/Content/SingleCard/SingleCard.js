import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      margin: '0 auto',
      maxWidth: 350,
      marginBottom: 20,
    },
    media: {
      height: 170,
    },
  });
  

function SingleCard({data}) {

const classes = useStyles();


  return (
    <>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${data.image_url}`}
                    titie={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${data.title}`.substring(0,20)}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.publisher}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    </>
  );
}

export default SingleCard;