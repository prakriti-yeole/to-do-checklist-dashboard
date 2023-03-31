import React from "react";
import style from "./TodoCard..module.css";

import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckSquare } from "react-icons/bs";

const TodoCard = ({ todo }) => {
  const removeTodo = () => {
    alert("deleted todo");
  };

  const modifyTodoItem = () => {
    alert("edit todo");
  };

  const markTodoCompleted = () => {
    alert("tod completed");
  };
  return (
    <div className={style.card_container}>
      <div className={style.todo_content}>{todo}</div>
      <div className={style.todo_cta_container}>
        <BsCheckSquare
          onClick={markTodoCompleted}
          className={style.cta_button}
        />
        <AiTwotoneEdit onClick={modifyTodoItem} className={style.cta_button} />
        <MdDeleteForever onClick={removeTodo} className={style.cta_button} />
      </div>
    </div>
  );
};

export default TodoCard;
