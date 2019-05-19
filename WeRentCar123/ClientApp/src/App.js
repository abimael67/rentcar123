import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Layout';
import { Home } from './components/Home';
import ClientPage from './components/pages/ClientPage'
import CarPage from './components/pages/CarPage'
let routes = [
  {
    type:"client",
    path:"/clients"
  },
  {
    type:"client",
    path:"/clients/add"
  },
  {
    type:"client",
    path:"/clients/edit"
  },
  {
    type:"car",
    path:"/cars"
  },
  {
    type:"car",
    path:"/cars/add"
  },
  {
    type:"car",
    path:"/cars/edit/:id"
  },
  
]
export default class App extends Component {
  static displayName = App.name;  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />   
        <Route exact path='/home' component={Home} />           
       { routes.map((r,i)=> {
            let comp = r.type === 'client'? ClientPage : CarPage
            return (<Route exact={true} key={i} path={r.path} component={comp} />)
        })}
      
      </Layout>
    );
  }
}
