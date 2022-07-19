import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ todoData, setTodoData }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [addNewTodo, setAddNewTodo] = useState({
    id: todoData.length,
    text: "",
    done: false,
    count: 1,
  });
  const handleChange = (e) => {
    setAddNewTodo({
      ...addNewTodo,
      id: todoData.length + 1,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (addNewTodo.text == "") {
      return;
    }
    var mark = false;
    todoData.forEach((e) => {
      if (addNewTodo.text === e.text) {
        mark = true;
        return;
      }
    });
    if (mark) {
      return;
    }
    const newTodolist = [...todoData];
    newTodolist.push(addNewTodo);
    setTodoData(newTodolist);
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={addNewTodo.text}
        onChange={(e) => handleChange(e)}
      />
      <button data-testid="add-task-button" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
