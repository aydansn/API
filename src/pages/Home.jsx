import React, { useState } from "react";
import Album from "../components/Album/Album";
import Photo from "../components/Photos/Photo";
import Todo from "../components/Todo/Todo";
import Comment from "../components/Comment/Comment";
import User from "../components/User/User";
import Post from "../components/Post/Post";
import Product from "../components/Product/Product";

const Home = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  console.log(title);
  console.log(desc);
  const handleSubmit = () => {
    console.log("req gonderildi");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        body: desc,
        userId: 1,
      }),
    });
  };
  return (
    <div>
      <Album />
      <Photo />
      <Todo />
      <Comment />
      <User />
      <Product />
      <Post />
      <div>Maile subscribe ol</div>
      <div>
        <input
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="bashliq gir"
        />
        <input
          required
          onChange={(e) => setDesc(e.target.value)}
          placeholder="aciglama gir"
        />
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Gonder</button>
      </div>
    </div>
  );
};

export default Home;
