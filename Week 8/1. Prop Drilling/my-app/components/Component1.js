import Component2 from "./Component2";

export default function Component1({ count }) {
  return (
    <>
      Component 1
      <ul>
        <li>
          <Component2 count={count} />
        </li>
      </ul>
    </>
  );
}
