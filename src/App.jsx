import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editId
          ? (t = { id: t.id, text })
          : { id: t.id, text: t.text }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setText("");
      return;
    }

    if (text !== "") {
      setTodos([{ id: `${text}-${Date.now()}`, text }, ...todos]);
      setText("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setText(editTodo.text);
    setEditId(id);
  };

  return (
    <div className="w-full h-screen bg-slate-700 flex justify-center items-center">
      <div className="container flex p-5 h-full flex-col items-center text-lg bg-slate-800 border-2 border-blue-300 w-[700px] overflow-scroll">
      <h1 className="text-4xl text-gray-300 p-3">To-do App</h1>
      
     
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          editId={editId}
          setText={setText}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        </div>
      
    </div>
  );
};

export default App;
