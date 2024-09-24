import React from "react";
import React, { useState } from "react";
import { editTodo } from "./redux/reducers/todoSlice";
import { useDispatch } from "react-redux";

const edit = () => {
  const [editVal, setEditVal] = useState(value);
  function editTodo() {
    const editVal = prompt("Enter edited value");
    dispatch(
      editTodo({
        index,
        editVal,
      })
    );
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={editVal}
          type="text"
          className="p-2"
          onChange={(e) => setEditVal(e.target.value)}
        />
        <button className="btn btn-accent  ml-0 sm:ml-3" onClick={editTodo}>
          update
        </button>
      </div>
    </div>
  );
};

export default edit;
