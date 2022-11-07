import "./App.css";
import { decriment, getCount, incriment, selectedAcount } from "./web3_client";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount().then((data) => {
      setCount(data);
    });
  }, []);

  const incrimentCount = async () => {
    await incriment();
    getCount().then((data) => {
      setCount(data);
    });
  };

  const decrimentCount = async () => {
    await decriment();
    getCount().then((data) => {
      setCount(data);
    });
  };

  return (
    <div className="App">
      <h1>Hello {selectedAcount}</h1>
      <h1>Count: {count}</h1>
      <button onClick={incrimentCount}>Incriment</button>
      <button onClick={decrimentCount}>Decriment</button>
    </div>
  );
}

export default App;
