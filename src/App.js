import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Login1 from './compo4/Login1';
import RegisterForm from './compo4/Registration2';
import AddtaskForm from './compo4/Addtask4';
import TasklistTable from './compo4/TasklistTable3';
import LoginForm from './compo4/Login1';

function App() {
  return (
    <div className="App">
      {/* <h1>HELLO</h1> */}
      <BrowserRouter>
      {/* <Login1/> */}    
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/addtaskForm" element={<AddtaskForm/>}/>
          <Route path="/tasklistTable" element={<TasklistTable/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;