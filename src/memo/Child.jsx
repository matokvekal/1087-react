import React, { memo } from "react";

const Child = (props) => {
  console.log("Child rendered");
  return <h1>i am children my name is {props.name}</h1>;
};

export default (Child);
//  export default memo(Child);
