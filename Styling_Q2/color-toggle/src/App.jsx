import { useState } from "react";

const App = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "24px",
          fontWeight: "bold"
        }}
      >
        Click the Toggle Button to see the Magic
      </div>

      <button onClick={toggleColor}>
        Toggle Color
      </button>
    </div>
  );
};

export default App;
