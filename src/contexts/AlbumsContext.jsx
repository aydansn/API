import { createContext, useEffect, useState } from "react";

export const AlbumContext = createContext();
export const AlbumsProvider = (props) => {
  console.log(props);
  const [album, setAlbum] = useState();
  console.log(album);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbum(data));
  }, []);

  return (
    <AlbumContext.Provider value={{ album }}>
      {props.children}
    </AlbumContext.Provider>
  );
};
