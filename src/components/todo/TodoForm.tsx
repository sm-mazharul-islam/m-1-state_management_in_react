import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [task, setTask] = useState("");
  console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7), //todo--> random string generator find online
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <h1 className="text-center underline text-2xl">Add todo</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 text-center text-xl border border-gray-200 shadow-md w-96  mx-auto mt-10"
      >
        <label htmlFor="Todo" className="mt-4 mb-4 font-bold">
          Task
        </label>
        <input
          className="border border-gray-500 m-2 rounded-sm p-2 mb-4"
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 p-2 rounded-md text-white font-bold m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
