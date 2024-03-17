import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function UserForm() {
  //   const { register, handleSubmit } = useForm({
  //     defaultValues: {
  //       userName: "Homer Simpson",
  //     },
  //   });

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      userName: "",
    },
  });

  useEffect(() => {
    // set the userName value
    setValue("userName", "Marge Simpson");
  }, []);

  function submitForm(data) {
    console.log(`form submitted - userName: ${data.userName}`);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      User Name: <input {...register("userName")} />
      <br />
      <br />
      <button type="submit">Update User Name</button>
    </form>
  );
}
