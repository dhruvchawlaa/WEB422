import Link from "next/link";
import Component1 from "../components/Component1";
import ComponentA from "../components/ComponentA";

export default function Home(props) {
  return (
    <>
      <ul>
        <li>
          <Component1 count={props.count} />
          <br />
        </li>
        <li>
          <ComponentA setCount={props.setCount} />
        </li>
      </ul>
      <Link href="/neighbor">To Nighbor Page</Link>
    </>
  );
}
