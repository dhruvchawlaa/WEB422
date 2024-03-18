import { CountContext } from "@/pages/_app";
import { useContext } from "react";

export default function Component3() {
  const count = useContext(CountContext);

  return (
    <>
      Component 3<br />
      <strong>Value: {count}</strong>
    </>
  );
}
