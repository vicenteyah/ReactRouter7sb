import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import Table from '../pages/Table.jsx'
import About from '../pages/About.jsx'

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
