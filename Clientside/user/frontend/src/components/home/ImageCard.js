import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import cardImage from "url:../../assets/images/key4.jpg"
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import cardImage1 from "url:../../assets/images/key1.jpg";
import cardImage2 from "url:../../assets/images/key2.jpg";
import cardImage3 from "url:../../assets/images/key3.jpg";

// import bgimage from "../../assets/images/bg.jpg";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    media: {
        height: 350,
    },
    title: {
        fontFamily:'Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        
        fontsize:'2px',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#ddd',
    },
});

export default function ImageCard({ place }) {
    const classes = useStyles();

    return (

       
            <Card className={classes.root}>
                <CardMedia>
                <Typography
                    className={classes.media}
                    
                    
                >
                    {place.imageUrl}
                    </Typography>
                    
                
                
                </CardMedia>
                
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        className={classes.title}
                    >
                        {place.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                    >
                        {place.description}
                    </Typography>
                </CardContent>
               
            </Card>
       
    );
}