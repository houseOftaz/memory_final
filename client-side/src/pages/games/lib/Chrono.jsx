import { useEffect, useState } from "react";

const Chrono = ({ initialTime, handleEndGame }) => {
  const [time, setTime] = useState(initialTime);
  console.log(time, initialTime);

  useEffect(() => {
    if (time <= 0) {
      handleEndGame();
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, handleEndGame]);

  return <div>{time}</div>;
};

export default Chrono;
