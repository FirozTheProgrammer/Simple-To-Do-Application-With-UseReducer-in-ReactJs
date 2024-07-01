import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const {  dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 12),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
    
  };
  return (
    <div>
      <h1>Add todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border border-red-500 mx-5"
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button className="btn btn-primary " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
