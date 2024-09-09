import React, { useContext } from "react";
import { PhotoContext } from "../../contexts/PhotosContext";
import { Link } from "react-router-dom";

const Photo = () => {
  const { photo } = useContext(PhotoContext);
  console.log(photo);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Photos</h1>
      {photo &&
        photo.length > 0 &&
        photo.map((photo, idx) => (
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
                to={`/singlephoto?id=${photo.id}`}
                key={idx}
              >
                <div>{photo.id}</div>
                <div>{photo.title}</div>
                <div>{photo.url}</div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Photo;
