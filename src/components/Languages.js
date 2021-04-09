import React from "react";

const Languages = ({ keywords }) => {
  return (
    <>
      {keywords.map((elem, id) => (
        <button key={id}>
          {elem}
        </button>
      ))}
    </>
  );
};

export default Languages;
