/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, startFetching } from "./actions";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleStartFetch = () => {
    dispatch(startFetching(count));
  };

  return (
    <div className="p-5 border bg-violet-500 w-full rounded-lg mt-20">
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={handleDecrement}
          className="bg-violet-200 rounded-lg px-4 py-2 w-15"
        >
          -
        </button>
        <p className="text-white text-7xl">{count}</p>
        <button
          onClick={handleIncrement}
          className="bg-violet-200 rounded-lg px-4 py-2 w-15 mt-1"
        >
          +
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={handleStartFetch}
          className="bg-violet-200 rounded-lg px-4 py-2 mt-7 "
        >
          Get Todo
        </button>
      </div>
    </div>
  );
}

export default Counter;
