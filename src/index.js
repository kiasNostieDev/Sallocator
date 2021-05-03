import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './components/Admin';
import Console from './components/Admin/Console';
import AddData from './components/AddData';
import SubTable from './components/Admin/SubTable';
import NameTable from './components/Admin/NameTable';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/admin' component={Admin} />
        <Route path='/subtable' component={SubTable} />
        <Route path='/nametable' component={NameTable} />
        <Route path='/console' component={Console} />
        <Route path='/addData/:slug' component={AddData} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
