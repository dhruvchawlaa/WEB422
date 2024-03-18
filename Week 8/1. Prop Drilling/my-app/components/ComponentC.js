export default function ComponentC(props) {
  return (
    <>
      Component C<br />
      <button onClick={(e) => props.setCount((n) => n + 1)}>
        Increase Value
      </button>
    </>
  );
}
