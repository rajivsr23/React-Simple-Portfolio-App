import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import EditExpensePage from '../components/EditExpensePage';
import PortfolioPage from '../components/PortfolioPage';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import PortfolioItemPage from '../components/PortfolioItemPage';

import NotFoundPage from '../components/NotFoundPage';

const AppRouter =()=>(
<BrowserRouter>
<div>
<Header />
<Switch>
<Route path="/" component={HomePage} exact={true}/>
<Route path="/contact" component={ContactPage}/>
<Route path="/edit/:id" component={EditExpensePage}/>
<Route path="/portfolio" component={PortfolioPage} exact={true}/>
<Route path="/portfolio/:id" component={PortfolioItemPage}/>
<Route component={NotFoundPage}/>
</Switch>
</div>

</BrowserRouter>

);
export default AppRouter;



/*

Home Page

Portfolio Page

Contact Page

--------
Header
Title->Portfolio
3 links-
Home 
Portfolio
Contact

Links become bold depending on the page open
-------
/-   Home Page (Static)

Welcome-h1

This is my site. Take a look around!-p

-------
/contact -Contact Page (Static)

Contact-h1

You can reach me at test@gmail.com-p

----------
/portfolio -Portfolio Page

My Work

My Work-h1

Check out the following things I've done:-p

2 Links-
Item One
Item Two

--------
/portfolio/1

A Thing I've Done-h1

This page if for the item with id of {1}-p

-------
/portfolio/2

A Thing I've Done-h1

This page if for the item with id of {2}-p

-----
404 Page
*/