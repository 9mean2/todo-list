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
        <div className="nav">
          <label>My todo list</label>
        </div>

        <div className="add">
          제목 <input value={title} onChange={titleChangeHandler} />
          내용 <input value={body} onChange={bodyChangeHandler} />
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={buttonClickHandler}
          >
            추가하기
          </button>
        </div>
        <div className="app-style">
          {todo.map(function (item) {
            return (
              <User
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

const User = ({ item, deleteButtonClickHandler }) => {
  return (
    <div key={item.id} className="component-style">
      {item.body} - {item.title}{" "}
      <button onClick={() => deleteButtonClickHandler(item.id)}>x</button>
    </div>
  );
};

export default App;
