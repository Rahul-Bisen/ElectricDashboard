import React from "react";

export default function Errornew(props) {
  return (
    <div>
      <div>
        <div className="alert alert-danger" role="alert">
          {props.message}
        </div>
      </div>
    </div>
  );
}
