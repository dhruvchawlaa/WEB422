import { useRouter } from "next/router";

export default function Employees() {
  const router = useRouter();
  const { department, status } = router.query;

  if (department && status) {
    return (
      <h2>
        Employees for department: {department} &amp; status: {status}
      </h2>
    );
  } else if (status) {
    return <h2>Employees with status: {status} </h2>;
  } else if (department) {
    return <h2>Employees for department: {department} </h2>;
  } else {
    return <h2>Department and/or Status Parameters Missing</h2>;
  }
}
