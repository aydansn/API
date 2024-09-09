import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SinglePhoto = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singlePhoto, setSinglePhoto] = useState();
  console.log(singlePhoto);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePhoto(data));
  }, []);
  return (
    <div>
      <div>{singlePhoto && singlePhoto.id}</div>
      <div>{singlePhoto && singlePhoto.title}</div>
      <div>{singlePhoto && singlePhoto.url}</div>
    </div>
  );
};

export default SinglePhoto;
