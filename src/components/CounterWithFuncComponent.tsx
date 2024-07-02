import ChildComponent from "./ChildComponent";
import { TProps } from "./type";

const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  console.log("render");

  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="bg-purple-500 p-4 rounded-md text-white font-bold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click For Update
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
