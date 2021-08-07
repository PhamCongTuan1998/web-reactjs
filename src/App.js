import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Phone from './components/Phone'
import Ipad from './components/Ipad'
import Watch from './components/Watch'
import Accessory from './components/Accessory'
import Cart from './components/Cart'
import Header from './components/Header';


function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Phone}/>
        <Route path="/ipad"  component={Ipad}/>
        <Route path="/donghothongminh"  component={Watch}/>
        <Route path="/phukien"  component={Accessory}/>
        <Route path="/giohang"  component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
