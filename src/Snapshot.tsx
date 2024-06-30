import { useState } from "react";

const Snapshot = () => {
  const [num, setNum] = useState<number>(0);
  const click = () => {
    setNum((v) => v + 1);
    console.log(num); //0
  };
  return <button onClick={click}>{num}</button>;
};
export default Snapshot;
