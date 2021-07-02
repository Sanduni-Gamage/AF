import React from "react";
import cardImage from "url:../../assets/images/key4.jpg";
import cardImage1 from "url:../../assets/images/key1.jpg";
import cardImage3 from "url:../../assets/images/key2.jpg";
import cardImage2 from "url:../../assets/images/key3.jpg";

const Places = [
    {
        title: 'Prof.Elizabeth',
        description:
            'Prof. Elizabeth initially trained as an electrical and electronic engineer at Canterbury University to pursue her interest in robotics.',
        imageUrl: <img src = {cardImage}/>,
        time: 1500,
    },
    {
        title: 'Prof.Billings',
        description:
            'Prof.Sam Billings initially trained as an electrical and electronic engineer at Canterbury University to pursue her interest in robotics.',
        imageUrl: <img src = {cardImage1}/>,
        time: 1500,
    },
    {
        title: 'Prof.Jonathan',
        description:
            'Prof.Jonathan initially trained as an electrical and electronic engineer at Canterbury University to pursue her interest in robotics.',
        imageUrl:<img src = {cardImage2}/>,
        time: 1500,
    },
    {
        title: 'Prof.Henry',
        description:
            'Prof.Henry initially trained as an electrical and electronic engineer at Canterbury University to pursue her interest in robotics.',
        imageUrl: <img src = {cardImage3}/>,
        time: 1500,
    },
];

export default Places;