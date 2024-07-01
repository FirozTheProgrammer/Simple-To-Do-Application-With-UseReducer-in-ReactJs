import React, { ChangeEvent, FormHTMLAttributes, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};



const InitialState = {
  name: "",
  age: "0",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof InitialState, action: TAction) => {
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
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row space-x-3">
      <input
        onChange={(e) => {
          dispatch({ type: "addName", payload: e.target.value });
        }}
        className="text-red-500 py-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <br />
      <br />
      <input
        onChange={(e) => {
          dispatch({ type: "addAge", payload: e.target.value });
        }}
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <br />
      <br />
      <input
        onBlur={(e) => {
          dispatch({ type: "addHobby", payload: e.target.value });
        }}
        type="text"
        name="hobbies"
        id="hobby"
        placeholder="hobby"
      />

      <br />
      <br />

      <button>Submit</button>
    </form>
  );
};

export default UserInfoWithUseReducer;
