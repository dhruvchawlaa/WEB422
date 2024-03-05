import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date());

    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <p>
      Locale: {props.locale}: {date?.toLocaleTimeString(props.locale)}{" "}
    </p>
  );
}
