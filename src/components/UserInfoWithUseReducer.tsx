//* user = {name = "something", age=67 , hobbies=["football", "gaming"]}

import { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        onBlur={(e) => dispatch({ type: "addHobby", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobby"
      />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseReducer;
