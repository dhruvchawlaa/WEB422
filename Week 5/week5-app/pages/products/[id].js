import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h2>Product Page (component)</h2>
      <p>Product: {id}</p>
    </>
  );
}
