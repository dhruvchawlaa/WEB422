import ComponentC from "./ComponentC";

export default function ComponentB(props) {
  return (
    <>
      Component B
      <ul>
        <li>
          <ComponentC setCount={props.setCount} />
        </li>
      </ul>
    </>
  );
}
