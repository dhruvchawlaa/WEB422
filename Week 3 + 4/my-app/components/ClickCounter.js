import { useState } from "react";

export default function ClickCounter(props) {
  const [numClicks, setNumClicks] = useState(0);
  const [myArray, setMyArray] = useState(["Red", "Green"]);

  // function increaseNumClicks(e) {
  //   // 'e' is the current event object
  //   setNumClicks(numClicks + 1);
  //   console.log(e.target, e.target.innerText);
  // }

  // Adding Parameters
  function increaseNumClicks(e, message) { // 'e' is the current event object
    console.log(message);
    setNumClicks(numClicks + 1);
    console.log(e.target, e.target.innerText);
  }

  // function addToArray(c, color) {
  //   console.log(color);
  //   setMyArray([...myArray, color]);
  //   console.log(c.target, c.target.innerText);
  // }

  // return <button onClick={increaseNumClicks}>Clicks: {numClicks}</button>;
  return <button onClick={(e) => { increaseNumClicks(e, "Hello") }}>Clicks: {numClicks}</button>;
  // return <button onClick={(c) => { addToArray(c, "Blue") }}>Color: {myArray}</button>;
}
