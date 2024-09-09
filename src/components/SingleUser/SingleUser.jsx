import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleUser = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singleUser, setSingleUser] = useState();
  console.log(singleUser);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  }, []);

  return (
    <div>
      <div>{singleUser && singleUser.id}</div>
      <div>{singleUser && singleUser.name}</div>
      <div>{singleUser && singleUser.username}</div>
    </div>
  );
};

export default SingleUser;
