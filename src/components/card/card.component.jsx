import React from 'react';
import './card.styles.css';
import Kengan from '../../aasets/kengan.jpg'

const Card = (props) => (
    <div className='cardContainer'>
        <img src={Kengan} alt="kengan"/>
        <div className='cardBackdrop'></div>
        
    </div>
)

export default Card;