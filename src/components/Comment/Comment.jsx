import React, { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { Link } from "react-router-dom";

const Comment = () => {
  const { comment } = useContext(CommentsContext);
  console.log(comment);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Comment</h1>
      {comment &&
        comment.length > 0 &&
        comment.map((comment, idx) => (
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
                to={`/singlecomment?id=${comment.id}`}
              >
                <div>{comment.id}</div>
                <div>{comment.name}</div>
                <div>{comment.email}</div>
                <div>{comment.body}</div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comment;
