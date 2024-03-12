import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();
  const { page, category } = router.query;
  //   const { page } = router.query;
  //   const { category } = router.query;

  if (page && category) {
    return (
      <h2>Products for page: {page} &amp; category: {category}</h2>
    );
  } else {
    return <h2>Page and/or Category Parameters Missing</h2>;
  }
}
