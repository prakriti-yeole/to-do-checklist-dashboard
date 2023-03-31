import React, { useState } from "react";

import style from "./Todos.module.css";
import TodoCard from "../Todo Card/TodoCard";

export const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [fetchedTodo, setFetchedTodo] = useState([]);

  const handleTodoAdd = () => {
    setFetchedTodo([newTodo, ...fetchedTodo]);
    setNewTodo("");
  };
  return (
    <div className={style.todo_container}>
      <h2 className={style.title}>Todo-List</h2>
      <input
        value={newTodo}
        className={style.todo_input}
        placeholder="Enter your todo list ..."
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button onClick={handleTodoAdd} className={style.add_button}>
        Add
      </button>
      <div className={style.todoList}>
        {fetchedTodo.length > 0
          ? fetchedTodo.map((todo) => <TodoCard todo={todo} />)
          : null}
      </div>
    </div>
  );
};
