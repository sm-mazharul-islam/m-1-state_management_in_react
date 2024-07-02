import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { TTodo } from "../type";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
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
