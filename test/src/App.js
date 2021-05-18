import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
 
  const [toDo, settoDo] = useState([]);
  const [current, setCurrent] = useState("");

  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() =>
              settoDo([
                ...toDo,
                { text: current, status: false, id: Date.now(), delete: false },
              ])
            }
            className="fas fa-plus"
          ></i>
        </div>
        <div className="todos">
          {toDo.map((obj) => {
            if (!obj.delete) {
              var t = Date(obj.id);
              var td=t.toString()
              var d=td.replace("GMT+0530 (India Standard Time)", "");

              return (
                <div className="todo">
                  <div className="left">
                    <input
                      onChange={(e) => {
                        settoDo(
                          toDo.filter((obj2) => {
                            if (obj2.id === obj.id) {
                              obj2.status = e.target.checked;
                            }
                            return obj2;
                          })
                        );
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p>{obj.text} <br/>{d}</p>
                  </div>
                  <div className="right">
                    <i
                      onClick={(e) => {
                        settoDo(
                          toDo.filter((obj3) => {
                            if (obj3.id === obj.id) {
                              obj3.delete = !obj3.delete;
                            }
                            return obj3;
                          })
                        );
                      }}
                      className="fas fa-times"
                    ></i>
                  </div>
                </div>
              );
            }
          })}
        </div>
     
<div classname="functions">
      <div classname="left">
      
        <h2>Active</h2>
        <div className="todos">
          {toDo.map((obj) => {
            if (!obj.status && !obj.delete) {
              var t = Date(obj.id);
              var td=t.toString()
              var d=td.replace("GMT+0530 (India Standard Time)", "");

              return (
                <div className="todo">
                  <div className="left">
                    <p>
                      {obj.text}<br/>
                      {d}
                    </p>
                  </div>
                  <div className="right"></div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div classname="center">
        {" "}
        <h2>Completed</h2>
        <div className="todos">
          {toDo.map((obj) => {
            if (obj.status && !obj.delete) {
              var t = Date(obj.id);
              var td=t.toString()
              var d=td.replace("GMT+0530 (India Standard Time)", "");

              return (
                <div className="todo">
                  <div className="left">
                    <p>
                      {obj.text}<br/>
                      {d}
                    </p>
                  </div>
                  <div className="right"></div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div classname="right">
      
        <h2>Rejected</h2>
        <div className="todos ">
          {toDo.map((obj) => {
            if (obj.delete && !obj.status) {
              var t = Date(obj.id);
              var td=t.toString()
              var d=td.replace("GMT+0530 (India Standard Time)", "");


              return (
                <div className="todo">
                  <div className="left">
                    <p>
                      {obj.text}<br/>
                      {d}
                    </p>
                  </div>
                  <div className="right"></div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div></div> </div>
    </div>
  );
}

export default App;
