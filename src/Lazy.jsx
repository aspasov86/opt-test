import { useState, lazy, Suspense } from "react";
import CallbackHook from "./CallbackHook";
import Memo from "./Memo";
import MemoHook from "./MemoHook";

/*const Memo = lazy(() => import("./Memo"));
const MemoHook = lazy(() => import("./MemoHook"));
const CallbackHook = lazy(() => import("./CallbackHook"));

const MemoLazy = () => (
  <Suspense fallback={null}>
    <Memo />
  </Suspense>
);
const MemoHookLazy = () => (
  <Suspense fallback={null}>
    <MemoHook />
  </Suspense>
);
const CallbackHookLazy = () => (
  <Suspense fallback={null}>
    <CallbackHook />
  </Suspense>
);*/

const Lazy = () => {
  const [activeTab, setActiveTab] = useState("memo");
  return (
    <div>
      <div style={{ margin: 20 }}>
        <button onClick={setActiveTab.bind(null, "memo")}>Memo</button>
        <button onClick={setActiveTab.bind(null, "callback-hook")}>
          Callback Hook
        </button>
        <button onClick={setActiveTab.bind(null, "memo-hook")}>
          Memo Hook
        </button>
      </div>
      <Container activeTab={activeTab} />
    </div>
  );
};

export default Lazy;

const Container = ({ activeTab }) => {
  switch (activeTab) {
    case "memo":
      //return <MemoLazy />;
      return <Memo />;
    case "callback-hook":
      //return <CallbackHookLazy />;
      return <CallbackHook />;
    case "memo-hook":
      // return <MemoHookLazy />;
      return <MemoHook />;
    default:
      // return <MemoLazy />;
      return <Memo />;
  }
};
