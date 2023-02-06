import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 0, title: "숨쉬기운동", body: "숨을 마셔보자", isDone: false },
  ]);

  const [todon, setTodon] = useState([
    { id: 1, title: "숨참기운동", body: "숨을 참아보자", isDone: false },
  ]);

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const addTodon = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    const newTodon = todo.filter((todo) => todo.id === id);
    setTodo(newTodo);
    setTodon([...todon, ...newTodon]);
    console.log(newTodo);
  };

  const cancelTodon = (id) => {
    const cancelTodon = todon.filter((todo) => todo.id !== id);
    const addTodon = todon.filter((todo) => todo.id === id);
    addTodon[0].isDone = false;
    setTodon(cancelTodon);
    setTodo([...todo, ...addTodon]);
  };

  const deleteTodon = (id) => {
    const deleteTodon = todon.filter((todo) => todo.id !== id);
    const addTodon = todon.filter((todo) => todo.id === id);
    addTodon[0].isDone = true;
    setTodon(deleteTodon);
  };

  //추가 버튼 핸들러
  const addTodo = () => {
    const newTodo = {
      id: new Date(),
      title: title,
      body: body,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
  };

  const dleteTodo = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  return (
    <div className="back">
      <div className="layout">
        <img className="nav" src="https://ifh.cc/g/HHGWh7.png" />

        <div className="add">
          <div className="input__container">
            Title{" "}
            <input
              className="input"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="input__container">
            Contents{" "}
            <input
              className="input"
              value={body}
              onChange={bodyChangeHandler}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={addTodo}
          >
            ✏️
          </button>
        </div>

        <div className="app-style">
          <div className="table">
            Working.. 🔥
            {todo.map(function (item) {
              return (
                <div key={item.id} className="todolist">
                  {item.title} <br /> {item.body} <br />
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dleteTodo(item.id)}
                  >
                    Delete 👋
                  </button>
                  <button
                    onClick={() => addTodon(item.id)}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Success
                  </button>
                </div>
              );
            })}
          </div>
          <div className="table">
            Done..! 🎉
            {todon.map(function (item) {
              return (
                <div key={item.id} className="todolist">
                  {item.title} <br /> {item.body} <br />
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteTodon(item.id)}
                  >
                    Delete 👋
                  </button>
                  <button
                    onClick={() => cancelTodon(item.id)}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Cancel
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
