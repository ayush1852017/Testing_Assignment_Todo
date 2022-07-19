import React from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json";
const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      text: "Learn React",
      done: false,
      count: 1,
    },
  ]);
  // console.log(data[0]);

  const DeleteTodo = (id) => {
    setTodoData(todoData.filter((todo) => todo.id !== id));
  };
  const CompleteTodo = (id) => {
    setTodoData(
      todoData.map((e) => {
        if (e.id === id) {
          const complete = { ...e };
          complete.done = !complete.done;
          return complete;
        }
        return e;
      })
    );
  };
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todoData={todoData} />
      {/* Add Task */}
      <AddTask todoData={todoData} setTodoData={setTodoData} />
      {/* Tasks */}
      <Tasks
        todoData={todoData}
        setTodoData={setTodoData}
        DeleteTodo={DeleteTodo}
        CompleteTodo={CompleteTodo}
      />
    </div>
  );
};

export default TaskApp;
