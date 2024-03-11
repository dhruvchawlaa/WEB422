import { useState, useEffect } from "react";

export default function User({user}) {  // props = {post : value}

  return (
    <>
      <p>ID: {user?.id}</p>
      <p>Name: {user?.first_name} {user?.last_name}</p>
      <p>Email: {user?.email}</p>
    </>
  );
}
