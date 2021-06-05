import React, { useContext } from "react";
import Image from "../components/Image/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

import QueryInput from "../components/QueryInput/QueryInput";
import "./photos.css";

function Photos() {
  const { allPhotos, nullQuery, error } = useContext(Context);

  const imageElements = allPhotos.map((photo, index) => (
    <Image key={photo.id} className={getClass(index)} photo={photo} />
  ));

  return (
    <>
      <QueryInput />
      <main className="Photos">{imageElements}</main>

      <div className="null-query-search">{nullQuery}</div>
      <div className="api-error">{error}</div>
    </>
  );
}
export default Photos;
