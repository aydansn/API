import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleAlbum = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singleAlbum, setSingleAlbum] = useState();
  console.log(singleAlbum);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleAlbum(data));
  }, []);

  return (
    <div>
      <div>{singleAlbum && singleAlbum.id}</div>
      <div>{singleAlbum && singleAlbum.title}</div>
    </div>
  );
};

export default SingleAlbum;
