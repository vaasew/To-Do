import React from "react";
import {FiEdit2} from "react-icons/fi";
import {FiPlus} from "react-icons/fi";
const TodoForm = ({ handleSubmit, text, editId, setText }) => {
  return (
    <form className="flex w-[350px] m-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-l-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
     
      />
      <button type="submit" className="bg-slate-400 m-0 rounded-r-lg p-2"> {editId ? <FiEdit2/> : <FiPlus/>}</button>
    </form>
  );
};

export default TodoForm;