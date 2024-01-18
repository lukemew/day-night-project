import { useState } from "react";

export default function App() {
  const [getTime, setGetTime] = useState(false);

  function handleTime() {
    setGetTime((curTime) => !curTime);
  }

  return (
    <div className={getTime ? "maincontainer day" : "maincontainer night"}>
      <FloatButton onHandleTime={handleTime} getTime={getTime} />
    </div>
  );
}

function FloatButton({ getTime, onHandleTime }) {
  return (
    <div className="floatwindow" onClick={onHandleTime}>
      <button className="button">
        <img src={getTime ? "sun.png" : "lua.png"} />
      </button>
    </div>
  );
}
