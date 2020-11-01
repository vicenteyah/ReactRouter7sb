import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Layout from './Navbar.jsx'
import Home from '../pages/Home'
import Table from '../pages/Table'
import About from '../pages/About'

function App() {
  return (
    <BrowserRouter>
         <Layout>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/table" component={Table}/>
             <Route exact path="/about" component={About}/>
           </Switch>
         </Layout>
    </BrowserRouter>
  );
}

export default App;
