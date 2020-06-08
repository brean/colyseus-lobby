import React from 'react';
import './App.css';

import { createHashHistory } from "history";
import { Router, Route } from "react-router-dom";

import { RoomList } from './components/RoomList';
import { Room } from './components/Room';

const history = createHashHistory();

const App = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={RoomList} />
      <Route path="/room/:roomId" component={Room} />
    </Router>      
  );
}

export default App;
