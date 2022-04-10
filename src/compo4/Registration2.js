import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginAddRegi.css";
import TextField from '@mui/material/TextField';

function RegisterForm() {

    let navigate = useNavigate();
    function handleClick(){
        navigate(-1)
    }
     
    return (
        <div>
            <form>
                <div className="container2">
                    
                    <h1>Register Form</h1>
                    <br/><br/>
                    <TextField id="outlined-basic" type="email" name="email" label="Email" variant="outlined"/>
                    {/* <input type="email" name="email" placeholder="Email"></input>   inputfield chya jagi textfield apply keli {tailwind css } */} 
                    <br /><br />
                    <TextField id="outlined-basic" type="password" name="password" label="Password" variant="outlined"/>   
                    <br /><br />
                    <TextField id="outlined-basic" type="password" name="password" label="Confirm Password" variant="outlined"/>  
                    <br /><br />

                    <button type="register" className="registerbtn"  onClick={handleClick}>REGISTER</button>
                    <br/><br/>
                   
                    <Link to="" onClick={handleClick}>Back To Login</Link>
                </div>
            </form>
        </div>
    );
}
export default RegisterForm;