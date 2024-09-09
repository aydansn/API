import { createContext, useEffect, useState } from "react";
export const TodosContext = createContext();
export const TodoProvider = (props) => {
  console.log(props);
  const [todo, setTodo] = useState();
  console.log(todo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <TodosContext.Provider value={{ todo }}>
      {props.children}
    </TodosContext.Provider>
  );
};
