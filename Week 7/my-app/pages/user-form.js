import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useRouter } from "next/router";

export default function UserForm() {
  const router = useRouter();

  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      userName: "",
      address: "",
      campus: "",
      program: [],
      parking: "",
      active: false,
    },
  });

  const watchUserName = watch("userName");
  const watchAllFields = watch();

  useEffect(() => {
    let data = {
      userName: "Homer Simpson",
      address: "123 Main St, Springfield U.S.A",
      campus: "newnham",
      program: ["CPA", "CPP"],
      parking: "semester",
      active: true,
    };

    // set the values of each form field to match "data"
    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  function submitForm(data) {
    console.log(data);
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newUser) => {
        console.log("newUser:", newUser);
        router.push("/api/users/" + newUser._id);
      });
  }

  return (
    <>
      <h1>User From</h1>
      <p>Week 7 - React Hook Form -- Registering Multiple Form Controls</p>
      <hr />

      <form onSubmit={handleSubmit(submitForm)}>
        User Name: <br />
        <input {...register("userName")} />
        <br />
        <br />
        Address: <br />
        <textarea {...register("address")}></textarea>
        <br />
        <br />
        Campus: <br />
        <select {...register("campus")}>
          <option value="king">King</option>
          <option value="SatY">Seneca at York</option>
          <option value="newnham">Newnham</option>
          <option value="markham">Markham</option>
        </select>
        <br />
        <br />
        Program: <br />
        <select multiple {...register("program")}>
          <option value="DAD">Database Application Developer</option>
          <option value="CPA">Computer Programming &amp; Analysis</option>
          <option value="CPP">Computer Programming</option>
          <option value="DSA">
            Honours Bachelor of Data Science and Analytics
          </option>
        </select>
        <br />
        <br />
        Parking: <br />
        <input type="radio" value="daily" {...register("parking")} /> Daily
        <br />
        <input type="radio" value="semester" {...register("parking")} />{" "}
        Semester
        <br />
        <input type="radio" value="year" {...register("parking")} /> Academic
        Year
        <br />
        <br />
        <input type="checkbox" {...register("active")} />
        Currently Active
        <br />
        <br />
        <button type="submit">Update User</button>
      </form>

      <hr />
      <h4>"Watching" Form Values</h4>
      <p>
        User Name {"{watchUserName}"}: {watchUserName}
      </p>
      <p>
        All Fields {"{watchAllFields}"}: {JSON.stringify(watchAllFields)}
      </p>
    </>
  );
}
