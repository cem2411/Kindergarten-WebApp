import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading
        type={"spokes"}
        color={"c#c#c#"}
        height={"50px"}
        width={"50px"}
      />
    </div>
  );
}
