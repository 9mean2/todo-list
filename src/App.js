import React, { useState } from "react";
import "./style/App.css";
import Input from "./componets/Input.js";

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

  // done으로 이동
  const addTodon = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    const newTodon = todo.filter((todo) => todo.id === id);
    setTodo(newTodo);
    setTodon([...todon, ...newTodon]);
    console.log(newTodo);
  };

  // 완료된 리스트 취소
  const cancelTodon = (id) => {
    const cancelTodon = todon.filter((todo) => todo.id !== id);
    const addTodon = todon.filter((todo) => todo.id === id);
    setTodon(cancelTodon);
    setTodo([...todo, ...addTodon]);
  };

  //완료된 리스트 삭제
  const deleteTodon = (id) => {
    const deleteTodon = todon.filter((todo) => todo.id !== id);
    const addTodon = todon.filter((todo) => todo.id === id);
    setTodon(deleteTodon);
  };

  //추가 버튼 핸들러
  const addTodo = () => {
    if (title == "") {
      alert("input을 채워주세요");
      return;
    } else {
      const newTodo = {
        id: new Date(),
        title: title,
        body: body,
        isDone: false,
      };
      setTodo([...todo, newTodo]);
      setTitle("");
      setBody("");
    }
  };

  // 작업중인 투두 삭제
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
            {/* <input
              className="input"
              type="text"
              name="title"
              onChange={titleChangeHandler}
              value={title}
              required
            /> */}
            <Input
              onChange={titleChangeHandler}
              value={title}
              name={title}
              type={"text"}
            />
          </div>
          <div className="input__container">
            Contents{" "}
            {/* <input
              className="input"
              onChange={bodyChangeHandler}
              type="text"
              name="title"
              value={body}
              required
            /> */}
            <Input onChange={bodyChangeHandler} value={body} name={title} />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-outline-danger"
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

          <div>
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
