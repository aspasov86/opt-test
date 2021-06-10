import { useState, useRef, useEffect, useMemo } from "react";

const fetchCount = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ count: 5, subcount: 17 });
    }, 1500);
  });

function App() {
  const [countData, setCountData] = useState(null);
  const [count, setCount] = useState(null);
  const [subcount, setSubcount] = useState(null);
  // const count = useMemo(() => countData?.count, [countData]);
  // const subcount = useMemo(() => countData?.subcount, [countData]);

  useEffect(() => {
    (async () => setCountData(await fetchCount()))();
  }, []);

  useEffect(() => {
    if (countData) {
      setCount(countData.count);
      setSubcount(countData.subcount);
    }
  }, [countData]);

  return (
    <div>
      <h1>MEMO Hook</h1>

      <div>Count: {count ?? "..."}</div>
      <Child subcount={subcount ?? "..."} />
    </div>
  );
}

export default App;

const Child = ({ subcount }) => {
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
      <h3>Subcount: {subcount}</h3>
    </div>
  );
};
