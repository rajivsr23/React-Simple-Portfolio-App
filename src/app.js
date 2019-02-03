import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage =() =>(
<div>
This is from my dashboard component
</div>

);

const AddExpensePage =() =>(
<div>
This is from my Add Expense component
</div>

);

const EditExpensePage =() =>(
<div>
This is from my Edit Expense component
</div>

);

const HelpPage =() =>(
<div>
This is from my Help Expense component
</div>

);

const NotFoundPage =() =>(
<div>
404!- <Link to="/">Go Home!</Link>
</div>

);

const Header=()=>(
<header>
<h1>Expensify</h1>
<NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink><br/>
 <NavLink to="/create" activeClassName="is-active">Create Expense Page</NavLink><br/>
<NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink><br/>
<NavLink to="/help" activeClassName="is-active">Help Page</NavLink><br/>
</header>

);
const routes =(
<BrowserRouter>
<div>
<Header />
<Switch>
<Route path="/" component={ExpenseDashboardPage} exact={true}/>
<Route path="/create" component={AddExpensePage}/>
<Route path="/edit" component={EditExpensePage}/>
<Route path="/help" component={HelpPage}/>
<Route component={NotFoundPage}/>
</Switch>
</div>

</BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('app'));

