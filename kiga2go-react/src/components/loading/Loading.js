import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading
        className="loading__object"
        type={"spin"}
        delay={1}
        color={"#3498db"}
        height={"50px"}
        width={"50px"}
      />
    </div>
  );
}
