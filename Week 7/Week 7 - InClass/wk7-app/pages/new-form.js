import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function NewForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      personId: "",
      name: "",
      gender: "",
      language: [],
    },
  });

  useEffect(() => {
    let data = {
      personId: "069",
      name: "Bruce Wayne",
      gender: "male",
      language: ["ENG", "SPA"],
    };

    // set the values of each form field to match "data"
    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  function submitForm(data) {
    console.log(data);
  }

  return (
    <>
      <h2>New Form</h2>
      <hr />

      <form onSubmit={handleSubmit(submitForm)}>
        Person ID: <br />
        <input {...register("personId", { required: true, maxLength: 10, pattern: /^[0-9]*$/ })} />
        {errors.personId?.type === "required" && <span>Person ID is required</span>}
        {errors.personId?.type === "maxLength" && <span>Person ID cannot contain more than 10 characters</span>}
        {errors.personId?.type === "pattern" && <span>Person ID must contain only digits</span>}
        <br />
        <br />
        Name: <br />
        <input className={errors.name && "inputError"} {...register("name", { pattern: /^[A-Za-z. ]+$/i })} />
        {errors.name?.type === "pattern" && <span className="inputErrorText">Name must only contain letters, spaces, and dots</span>}
        <br />
        <br />
        Gender: <br />
        <input type="radio" value="male" {...register("gender")} /> Male
        <br />
        <input type="radio" value="female" {...register("gender")} /> Female
        <br />
        <br />
        Languages: <br />
        <select multiple {...register("language")}>
          <option value="ENG">English</option>
          <option value="HIN">Hindi</option>
          <option value="SPA">Spanish</option>
          <option value="FR">French</option>
        </select>
        <br />
        <br />
        <button type="submit" disabled={Object.keys(errors).length > 0}>Update User</button>
      </form>
    </>
  );
}
