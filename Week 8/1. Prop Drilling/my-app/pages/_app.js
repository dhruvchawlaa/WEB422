import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0); // declare high-level "count" state
  return <Component {...pageProps} count={count} setCount={setCount} />; // pass it as props to the page components
}
