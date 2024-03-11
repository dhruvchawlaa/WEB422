import Link from "next/link";
import { useRouter } from 'next/router';

export default function DashboardHome() {

  const router = useRouter();

  return (
    <>
      <h2>Dashboard Home</h2>

      <hr />

      <h3>Week 5 - Client-Side Page Transition - using JSX Markup ({"<"}Link&gt;)</h3>
      <Link href="/about" legacyBehavior> About</Link>
      <br />
      <Link href={{ pathname: "/about", query: { name: "test " } }}> About ... </Link>

      <hr />

      <h3>Week 5 - Client-Side Page Transition - using JS (useRouter hook)</h3>
      <button onClick={ (e) => { router.push("/about"); }} > Go to About Page </button>

      <hr />

      <button onClick={ (e) => { router.push({ pathname: "/about", query: { name: "test " } }); }} > Go to About Page </button>
    </>
  );
}
