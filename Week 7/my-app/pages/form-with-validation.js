import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function FormWithValidation() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });

  useEffect(() => {
    let data = {
      firstName: "Homer",
      lastName: "Simpson",
      age: 42,
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
    <form onSubmit={handleSubmit(submitForm)}>
      First Name: <br />
      {/* <input {...register("firstName", { required: true, maxLength: 20 })} /> */}
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {errors.firstName?.type === "required" && <span><br />First Name is required</span>}
      {errors.firstName?.type === "maxLength" && <span><br />First Name Cannot contain more than 20 characters</span>}
      <br />
      <br />
      Last Name: <br />
      {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
      <input className={errors.lastName && "inputError"} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> 
      {errors.lastName?.type === "pattern" && <span className="inputErrorText"><br />Last Name must only contain letters</span>}
      <br />
      <br />
      Age: <br />
      {/* <input type="number" {...register("age", { min: 18, max: 99, validate: { onlyEven: v => v % 2 == 0 } })} /> */}
      <input className={errors.age && "inputError"}  type="number" {...register("age", { min: 18, max: 99, validate: { onlyEven: v => v % 2 == 0 } })} /> 
      {errors.age?.type === "min" && <span className="inputErrorText"><br />Age must be greater than 17 </span>}
      {errors.age?.type === "max" && <span className="inputErrorText"><br />Age must be less than 100</span>}
      {errors.age?.type === "onlyEven" && <span className="inputErrorText"><br />Age must be only Even number</span>}<br /><br />
      <br />
      <br />
      <button type="submit" disabled={Object.keys(errors).length > 0}>Update User</button>
    </form>
  );
}
