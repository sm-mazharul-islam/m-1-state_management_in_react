import { createContext } from "react";
import { TTodoProviderProps } from "../components/type";

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const values = {
    todoTitle: "This is a todo title",
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
