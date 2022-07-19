import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ e, todoData, DeleteTodo, CompleteTodo }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [count, setCount] = useState(e.count);

  const handleCount = (x) => {
    setCount(count + x);
  };
  return (
    <li data-testid="task" className={styles.task}>
      {e.done === true ? (
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onClick={() => CompleteTodo(e.id)}
          defaultChecked="true"
        />
      ) : (
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onClick={() => CompleteTodo(e.id)}
        />
      )}

      <div data-testid="task-text">{e.text}</div>
      {/* Counter here */}
      <Counter count={count} handleCount={handleCount} />
      <button data-testid="task-remove-button" onClick={() => DeleteTodo(e.id)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
