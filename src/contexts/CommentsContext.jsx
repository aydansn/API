import { createContext, useEffect, useState } from "react";
export const CommentsContext = createContext();
export const CommentsProvider = (props) => {
  console.log(props);
  const [comment, setComment] = useState();
  console.log(comment);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <CommentsContext.Provider value={{ comment }}>
      {props.children}
    </CommentsContext.Provider>
  );
};
