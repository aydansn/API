import { createContext, useEffect, useState } from "react";
export const PhotoContext = createContext();
export const PhotosProvider = (props) => {
  console.log(props);
  const [photo, setPhoto] = useState();
  console.log(photo);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);

  return (
    <PhotoContext.Provider value={{ photo }}>
      {props.children}
    </PhotoContext.Provider>
  );
};
