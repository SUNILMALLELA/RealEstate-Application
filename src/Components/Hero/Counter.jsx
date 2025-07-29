import React, { useEffect, useState } from 'react';

 const Counter = ({ start, end, speed }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev < end) {
          return prev + 1;
        } else {
          clearInterval(interval); 
          return prev;
        }
      });
    }, speed || 1); 

    return () => clearInterval(interval); 
  }, [start, end, speed]);

  return <h1>{number}+</h1>;
};
export default Counter;
