function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <p>Hello, {formatName(user)}!</p>;
  }
  return <p>Hello, Stranger.</p>;
}

export default function Hello(props) {
  //   return <p>Hello World!</p>;
  //   const name = "Josh Perez";
  //   return <p>Hello {name}!</p>;
  //   const user = {
  //     firstName: "Harper",
  //     lastName: "Perez",
  //   };
  //   return <p>Hello, {formatName(user)}!</p>;
  //   return getGreeting(user);
  return (
    <p>
      Hello {props.fName} {props.lName}
      <br />
      <img src={props.avatarUrl} />
    </p>
  );
}

Hello.defaultProps = {
  fName: "First Name",
  lName: "Last Name",
};
