import React from "react";
import {FiEdit2} from "react-icons/fi";
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos p-0 m-0">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText overflow-scroll" key={t.id}>
            {t.text}
          </span>
          <button className="p-1" onClick={() => handleEdit(t.id)}><FiEdit2/></button>
          <button className="p-1" onClick={() => handleDelete(t.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;