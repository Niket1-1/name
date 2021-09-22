import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((val) => {
        if (val === 0) {
          clearInterval(id);
          return 0;
        } else {
          return val - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div>Counter:-{count}</div>
    </>
  );
};

export default Counter;
