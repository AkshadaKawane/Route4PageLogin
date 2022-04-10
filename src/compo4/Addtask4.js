import React from "react";
import "./LoginAddRegi.css";
import TextField from '@mui/material/TextField';

function AddtaskForm() {
    return (
        <div>
            <div className="container4">
                <form>
                    <h1>Add Task</h1>
                    <br/><br/>
                    <TextField id="outlined-basic" type="text" name="taskName" label="Task Name" variant="outlined"/>        
                    {/* <input type="text" name="taskName" placeholder="Task Name"></input> */}
                    <br /><br />
                    <TextField id="outlined-basic" type="text" name="taskDescription" label="Task Description" variant="outlined"/>        
                    {/* <input type="text" name="taskDescription" placeholder="Task Description"></input> */}
                    <br /><br />
                    <button type="button" className="addtaskbtn">SUBMIT</button>
                </form>
            </div>
        </div>

    );
}
export default AddtaskForm;