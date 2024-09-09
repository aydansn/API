import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { Link } from "react-router-dom";

const Todo = () => {
  const { todo } = useContext(TodosContext);
  console.log(todo);
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Todo</h1>
      {todo &&
        todo.length > 0 &&
        todo.map((todo, idx) => (
            <div>
                <div   style={{
                border: " 1px solid orange",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <Link
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={idx}
            to={`/singletodo?id=${todo.id}`}
          >
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.completed}</div>
          </Link>
                </div>
            </div>
         
        ))}
    </div>
  );
};

export default Todo;
