import React from "react";

const HeavyComponent = () => {
  console.log(" HeavyComponent rendered");

  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "2px solid black",
      }}
    >
      <h2>Heavy Component</h2>
      <p>This part takes time to load, so it shouldn’t refresh when the counter
        changes.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
