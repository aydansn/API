import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
export const PostProvider = (props) => {
  console.log(props);
  const [post, setPost] = useState();
  console.log(post);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  console.log(post, "POST FROM CONTEXT");
  return (
    <PostContext.Provider value={{ post }}>
      {props.children}
    </PostContext.Provider>
  );
};
