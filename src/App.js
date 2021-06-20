import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

// components
import Home from './pages/Home.jsx';
import Rooms from './pages/Rooms.jsx';
import Room from './pages/Room.jsx';
import Error from './pages/Error.jsx';
import Navbar from './components/Navbar';

import { Route,Switch } from 'react-router-dom';

class WindowPortal extends Component{
  containerElement = document.createElement('div');

  componentDidMount(){
    window.document.body.appendChild(this.containerElement);
  };

  render(){
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.containerElement);
  }
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={Room} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
