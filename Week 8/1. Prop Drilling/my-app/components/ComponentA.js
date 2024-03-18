import ComponentB from "./ComponentB";

export default function ComponentA(props) {
  return (
    <>
      Component A
      <ul>
        <li>
          <ComponentB setCount={props.setCount} />
        </li>
      </ul>
    </>
  );
}
