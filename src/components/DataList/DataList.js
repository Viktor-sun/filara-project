import React from "react";

const DataList = ({ name }) => {
  return (
    <ul>
      {name.map(({ id, date }) => (
        <li key={id}>
          <p>{date}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
