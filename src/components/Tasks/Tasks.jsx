import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ todoData, CompleteTodo, DeleteTodo }) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {todoData?.length != 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          {todoData?.map((e) => (
            <Task
              key={e.id}
              e={e}
              DeleteTodo={DeleteTodo}
              CompleteTodo={CompleteTodo}
            />
          ))}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          No todo tasks present, Add a new task to the list
        </div>
      )}
    </>
  );
};

export default Tasks;
