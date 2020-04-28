import React from 'react';
import './pages.styles.css'

import { Route, Switch } from 'react-router-dom';

import MainPage from './main-page/main-page';
import AllPage from './all-page/all-page';

const Pages = () => (
    <div className='pagesContainer'>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route  path='/all' component={AllPage}/>
        </Switch>
    </div>
)

export default Pages;
