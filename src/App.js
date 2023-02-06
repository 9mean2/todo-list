import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 0, title: "숨쉬기운동", body: "숨을 마셔보자", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  //추가 버튼 핸들러
  const buttonClickHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
    };

    setTodo([...todo, newTodo]);
  };

  const deleteButtonClickHandler = (id) => {
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
            onClick={buttonClickHandler}
          >
            ✏️
          </button>
        </div>
        <div className="app-style">
          {todo.map(function (item) {
            return (
              <Todo
                key={item.id}
                item={item}
                deleteButtonClickHandler={deleteButtonClickHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Todo = ({ item, deleteButtonClickHandler }) => {
  return (
    <div key={item.id} className="todolist">
      <h1>{item.title}</h1> <br /> {item.body} <br />
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => deleteButtonClickHandler(item.id)}
      >
        Delete 👋
      </button>
      <button type="button" class="btn btn-outline-success">
        Success
      </button>
    </div>
  );
};

export default App;
