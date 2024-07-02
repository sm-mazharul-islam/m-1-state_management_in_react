import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { TTodo } from "../type";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);
  return (
    <div className="text-center mt-4 text-2xl text-purple-700 font-bold">
      {state.map((item: TTodo) => (
        <p
          key={item.id}
          className={`cursor-pointer ${item.isCompleted ? "line-through" : ""}`}
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
