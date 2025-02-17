import { memo } from "react";

interface IProp {}

const Counter = ({}: IProp) => {
  return <div> Counter : 0 </div>;
};

export default memo(Counter);
