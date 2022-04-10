import React from "react";
import "./LoginAddRegi.css";
import { Link, useNavigate } from "react-router-dom";


function TaskList() {


    let navigate = useNavigate();
  
    function handleClick(){
      navigate('/addtaskForm')
    }

    const obj = [{
        id: 1,
        name: "Sketch",
        city: "Pune"
    }, {
        id: 2,
        name: "Sketch",
        city: "Pune"
    }, {
        id: 3,
        name: "Sketch",
        city: "Pune"
    }
    ];
    const [state] = React.useState(obj)

    return (
        <div>
            <table border="1" className="TaskTable">
                <tr>
                    {Object.keys(state[0]).map((key) => (
                        <th>{key}</th>
                    ))}
                </tr>

                {state.map((item) => (
                    <tr key={item.id}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                ))}
            </table>

            <form>
                <div className="container3">
                    <img className="img" height={60} width={60} src="https://cdn3.vectorstock.com/i/1000x1000/43/37/login-red-round-flat-isolated-push-button-vector-16654337.jpg"></img>

                    <p>Wel-Come : </p>
                    <div className="conainergap">
                        <button type="button">View Task</button>

                        <button type="button" onClick={handleClick} >Add Task</button>
                    </div>
                    <br /><br />
                    <div className="conainergap">
                        <button type="button">task name</button>
                        <button type="button">Search</button>
                    </div>
                    <p>Task List : </p>

                </div>
            </form>
        </div>
    )

}
export default TaskList;