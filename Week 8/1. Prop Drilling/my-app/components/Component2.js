import Component3 from "./Component3";

export default function Component2({ count }) {
  return (
    <>
      Component 2
      <ul>
        <li>
          <Component3 count={count} />
        </li>
      </ul>
    </>
  );
}
