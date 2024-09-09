import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SinglePost = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singlePost, setSinglePost] = useState();
  console.log(singlePost);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data));
  }, []);
  return (
    <div>
      <div>{singlePost && singlePost.id}</div>
      <div>{singlePost && singlePost.title}</div>
      <div>{singlePost && singlePost.body}</div>
    </div>
  );
};

export default SinglePost;
