import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleTodo = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singleTodo, setSingleTodo] = useState();
  console.log(singleTodo);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleTodo(data));
  }, []);
  return (
    <div>
      <div>{singleTodo && singleTodo.id}</div>
      <div>{singleTodo && singleTodo.title}</div>
      <div>{singleTodo && singleTodo.completed}</div>
    </div>
  );
};

export default SingleTodo;
