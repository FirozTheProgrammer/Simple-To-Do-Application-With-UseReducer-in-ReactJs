import React, { useState } from "react";

const UserInfoWithUseState = () => {
  // type Tuser = {
  //     name: string,
  //     age: string,
  //     hobbies: string,

  // }
  const UserState = {
    name: "",
    age: "0",
    hobbies: [],
  };
  const [user, setUser] = useState(UserState);
  console.log(user);
  return (
    <form className="flex flex-row space-x-3">
      <input
        className="text-red-500 py-10"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />

      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />

      <input
      onBlur={(e)=>setUser({...user, hobbies: [...user.hobbies, e.target.value]})}
      type="text" name="hobbies" id="hobby" placeholder="hobby" />
    </form>
  );
};

export default UserInfoWithUseState;
