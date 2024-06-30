import { useState } from "react";

type CounterProps = {
  price: number;
};

const Counter = ({ price }: CounterProps) => {
  const [num, setNum] = useState(1);

  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={minus}
          className="bg-slate-500 border border-slate-950 text-white"
        >
          -
        </button>
        <span className="text-3xl">{num}</span>
        <button
          onClick={plus}
          className="bg-slate-500 border border-slate-950 text-black"
        >
          +
        </button>
      </div>
      <div>{price * num}</div>
    </>
  );
};
export default Counter;
