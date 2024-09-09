import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleComment = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singlecomment, setSingleComment] = useState();
  console.log(singlecomment);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleComment(data));
  }, []);
  return (
    <div>
      <div>
        {singlecomment && singlecomment.id}
        {singlecomment && singlecomment.name}
        {singlecomment && singlecomment.email}
        {singlecomment && singlecomment.body}
      </div>
    </div>
  );
};

export default SingleComment;
