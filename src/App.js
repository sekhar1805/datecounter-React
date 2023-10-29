import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setRange(1);
  }
  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "15px" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <span>Range:{range}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - range)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + range)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from Today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || range !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
