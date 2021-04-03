import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import "./index.css"
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById('root')
);
