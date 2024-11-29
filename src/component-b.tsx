import React from "react";

function Test() {
  return <h1>this is Test component</h1>;
}

export const ComponentB = () => {
  return (
    <div>
      component b.
      <Test />
    </div>
  )
}
