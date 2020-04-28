import React from 'react';
import './main-page.styles.css';

import Slide from '../../components/slide/slide.component';
import Card from '../../components/card/card.component';

const MainPage = () => (
    <div className='mainPageContainer'>
        <p className='sliderTitle'>Slider TItle</p>
        <Slide />
        <p>Main page</p>
    </div>
)

export default MainPage;
