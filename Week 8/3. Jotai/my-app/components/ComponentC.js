import { useAtom } from "jotai";
import { countAtom } from "@/store";

export default function ComponentC(){
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      Component C<br />
      return <button onClick={(e) => setCount(count + 1)}>Increase Value</button>
    </>
  );
}