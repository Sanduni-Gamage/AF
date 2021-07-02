import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../home/ImageCard';
import Places from '../home/Places';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../../pages/styles/keynote.css"

const Vist = () => {
const useStyles = makeStyles((theme) => ({
     root: {
         minHeight: '90vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         [theme.breakpoints.down('md')]: {
             flexDirection: 'column',
         },
     },
    keynotetitle: {
        minHeight: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        //fontFamily: 'Nunito',
        //fontSize: 'inherit',
        padding: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    keynotebutton: {
        width: 180,
        height: 180,
        fontSize: '50px',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
    }
}));

     

    

   

  

     return (
         //<div className="visit-page">
            <div className="keynotetitle">
                 
             <div class="row">
             <div class="column">
             <ImageCard place={Places[3]}  />
             </div>
             <div class="column">
             <ImageCard place={Places[2]}  />
             </div>
             <div class="column">
             <ImageCard place={Places[1]}  />
             </div>
             <div class="column">
             <ImageCard place={Places[0]}  />
             </div>
             </div>

         </div>
         //</div>
     );
 };
export default Vist;