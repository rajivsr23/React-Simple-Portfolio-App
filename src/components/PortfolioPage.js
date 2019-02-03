import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage=(props)=>(
<div>
<h1>My Work</h1>
<p>Check out the following things I've done: {props.match.params.id}</p>

<Link to="/portfolio/1">Item One</Link><br/>
<Link to="/portfolio/2">Item Two</Link>
</div>   

);
export default PortfolioPage;