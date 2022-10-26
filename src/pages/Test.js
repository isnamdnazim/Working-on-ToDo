import React, { useEffect } from "react";
import useBearStore, { getAllTodo } from "../app/store";

const Test = () => {
  const { todos } = useBearStore();

  return (
    <div>
      {todos.map((item) => {
        <h1>{item.title}</h1>;
        console.log(item);
      })}
    </div>
  );
};

export default Test;
