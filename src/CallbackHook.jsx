import { useState, useRef, useEffect, memo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [subcount, setSubcount] = useState(0);

  const countHandler = () => setCount(count + 1);
  const subcountHandler = /*useCallback(*/ () => setSubcount(subcount + 1); //*, [subcount]);

  return (
    <div>
      <h1>CALLBACK Hook</h1>

      <div>Count: {count}</div>
      <button onClick={countHandler}>Add one to count</button>
      <button onClick={subcountHandler}>Add one to subcount</button>

      <Child subcountHandler={subcountHandler} />
    </div>
  );
}

export default App;

const Child = memo(({ subcountHandler }) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div
      style={{
        marginTop: 20,
        border: "2px solid black",
        height: 100,
        width: 200,
        position: "relative",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          border: "1px solid black",
          borderRadius: "50%",
          top: -15,
          right: -15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9,
          background: "lightgreen",
        }}
      >
        {renderCount.current}
      </div>
    </div>
  );
});
