import React, { useState } from "react";
import "./LoginAddRegi.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { border } from "@mui/system";


function LoginForm() {

    let navigate = useNavigate();
  
    function handleClick(){
      navigate('/login') 
      navigate('/tasklistTable')
    }
    

    const [user, setUser] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) 
    {
        if (user.length < 3 || password.length < 3) {
            alert("enter Correct Values")
        }
        else {
            alert("SuccessFull")
        }

        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)
    }

    return (

            <div className="container">
                <form onSubmit={loginHandle} >
                
                    <h1>Login Form</h1>

                    <img height={50} width={50} src="https://cdn3.vectorstock.com/i/1000x1000/43/37/login-red-round-flat-isolated-push-button-vector-16654337.jpg"></img>
                    <br /><br />
                   
                    <TextField id="outlined-basic" type="email" name="email" label="Email" variant="outlined" onChange={userHandler}/>  {userErr ? <span>User Not Valid</span> : " "}
                    <br /><br />
                    <TextField id="outlined-basic" type="password" name="password" label="Password" variant="outlined" onChange={userHandler}/>   {passErr ? <span>Password Not Valid</span> : " "}
                    <br /><br />

                    <Button variant="contained" component="span" className="loginbtn" onClick={handleClick} > LOGIN </Button>
                    
                    <br/><br/>
                    {/* <Link to="login">Login</Link> */}
                    {/* <br /><br /> */}
            
                    <Link to="/register"> Register </Link>


                </form>
            </div>
    );
}
export default LoginForm;



      
