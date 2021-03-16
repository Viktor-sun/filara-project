import React from "react";
import "./DataList.css";

const DataList = ({ name }) => {
  return (
    <ul className="DataList">
      {name.map(({ id, date }) => (
        <li key={id} className="DataList__item">
          <p>{date}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
