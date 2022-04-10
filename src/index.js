import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LoginForm from './compo4/Login1';
import RegisterForm from './compo4/Registration2';
import TasklistTable from './compo4/TasklistTable3';
import AddtaskForm from './compo4/Addtask4';

ReactDOM.render(
  <div>
    <App/>
    {/* <LoginForm />
     <RegisterForm/>
    <TasklistTable/>
    <AddtaskForm/>  */}
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();