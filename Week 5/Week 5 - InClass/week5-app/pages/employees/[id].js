import { useRouter } from "next/router";

export default function Employee() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h2>Employee Page (component)</h2>
      <p>Id: {id}</p>
    </>
  );
}
