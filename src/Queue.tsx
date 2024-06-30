import { useState } from "react";

const Queue = () => {
  const [num, setNum] = useState<number>(1);

  //microtask queue
  const click = () => {
    setNum(num + 1); //=== setNum(1+1)
    setNum(num + 1); //=== setNum(1+1)
    setNum(num + 1); //=== setNum(1+1)
    //2

    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  };
  return <div onClick={click}>{num}</div>;
};
export default Queue;
