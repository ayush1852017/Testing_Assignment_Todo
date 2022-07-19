import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count, handleCount }) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  console.log(count);
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => handleCount(1)}
      >
        ADD
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => handleCount(-1)}
      >
        Reduce
      </button>
    </div>
  );
};

export default Counter;
