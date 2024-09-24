import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addTodo, removeTodo, editTodo } from "../Config/Reducers/todoslice";

const App = () => {
  const todoVal = useRef(); // Reference to input field
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos.todo); // Get the todos from the state

  // Add todo to Redux
  function addTodoInRedux(e) {
    e.preventDefault();
    const inputValue = todoVal.current.value.trim();
    if (inputValue === "") return; // Prevent adding empty todos
    dispatch(
      addTodo({
        title: inputValue,
      })
    );
    todoVal.current.value = ""; // Clear input field
    todoVal.current.focus(); // Auto-focus input after submission
  }

  // Delete a todo by index
  function deleteTodo(index) {
    dispatch(
      removeTodo({
        index,
      })
    );
  }

  // Edit a todo by index and pre-fill the prompt with the current value
  function handleEditTodo(index) {
    const currentTodo = selector[index].title;
    console.log("Current Todo:", currentTodo); // Log the current todo
    const editVal = prompt("Edit the todo", currentTodo);
    if (editVal && editVal.trim() !== "") {
      console.log("New value:", editVal); // Log the new value
      dispatch(
        editTodo({
          index,
          editVal: editVal.trim(),
        })
      );
    }
  }

  return (
    <>
      <form action="">
        <input type="text" ref={todoVal} />
        <button onClick={addTodoInRedux}>Submit</button>
      </form>

      <ul>
        {/* Check if there are todos and map through them */}
        {selector.length > 0 ? (
          selector.map((item, index) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => handleEditTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        ) : (
          <h1>No todos available</h1> // Display message when there are no todos
        )}
      </ul>
    </>
  );
};

export default App;
