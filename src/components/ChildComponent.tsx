import { TCount } from "./type";

const ChildComponent = ({ count }: TCount) => {
  return <div className="border border-green-500 p-10 m-10">{count}</div>;
};

export default ChildComponent;
