import React, { useEffect, useState } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div>Count: {count}</div>;
};

export default IntervalCounter;
