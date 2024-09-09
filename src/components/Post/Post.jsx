import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostsContext";
import { Link } from "react-router-dom";

const Post = () => {
  const { post } = useContext(PostContext);
  console.log(post, "POST FROM POST ITSELF");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>POST</h1>
      {/* return yoxdu */}
      {post &&
        post.length > 0 &&
        post.map((item, idx) => {
          return (
            <div>
              <div
                style={{
                  border: " 1px solid orange",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  key={idx}
                  to={`/singlepost?id=${item.id}`}
                >
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <div>{item.body}</div>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Post;
