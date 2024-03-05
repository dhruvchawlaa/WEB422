function Child(props) {
  return (
    <>
      <button onClick={(e) => props.sendMessage("Hello, Parent!")}>
        Send Message to Parent
      </button>
    </>
  );
}

export default Child;
