import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ todoData }) => {
  // sample values to be replaced
  let totalTask = todoData.length;
  let unCompletedTask = todoData.filter((e) => e.done === true);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">
        Uncomplete Tasks:{unCompletedTask}
      </b>
      <b data-testid="header-total-task">Total Tasks:{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
