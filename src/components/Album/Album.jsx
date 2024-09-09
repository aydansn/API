import React, { useContext } from "react";
import { AlbumContext } from "../../contexts/AlbumsContext";
import { Link } from "react-router-dom";
import style from "./Album.module.css";

const Album = () => {
  const { album } = useContext(AlbumContext);
  console.log(album);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Albums</h1>
      {album &&
        album.length > 0 &&
        album.map((album, idx) => (
          <div>
            <div
              style={{
                border: " 1px solid orange",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <Link
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={idx}
                to={`/singlealbum?id=${album.id}`}
              >
                <div>{album.id}</div>
                <div>{album.title}</div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Album;
