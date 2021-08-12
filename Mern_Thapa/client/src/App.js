import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/SignUp';
import ErrorPage from './components/ErrorPage';


const App = () =>{
  return(
    
    <>
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/signup">
        <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <ErrorPage/>
        </Route>

      </Switch>
      
    </>
  )
}
export default App