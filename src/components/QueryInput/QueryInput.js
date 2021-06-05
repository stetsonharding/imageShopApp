import React, { useContext } from "react";
import { Context } from "../../Context";

import "./QueryInput.css";

const QueryInput = () => {
  const { imageQuery, setImageQuery, SearchImage } = useContext(Context);

  return (
    <>
      <form className="query-input-form container" onSubmit={SearchImage}>
        <label className="query-label">
          <input
            type="text"
            className="query-input"
            placeholder="Search Images"
            value={imageQuery}
            onChange={(e) => setImageQuery(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
    </>
  );
};

export default QueryInput;
