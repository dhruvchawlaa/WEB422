import Link from "next/link";

export default function Layout(props) {
  return (
    <>
      <h1>Pages / Routing in Next.js</h1>
      {/* <a href="/">Home</a> | <a href="/about">About</a> |{" "}
      <a href="/dashboard">Dashboard</a> |{" "}
      <a href="/dashboard/preferences">Dashboard Preferences</a> */}

      {/* <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/dashboard/preferences">Dashboard Preferences</Link> */}

      <nav className="nav navbar-light bg-light">
        <Link href="/" legacyBehavior><a className="nav-link active">Home</a></Link>
        <Link href="/about" legacyBehavior><a className="nav-link">About</a></Link>
        <Link href="/dashboard" legacyBehavior><a className="nav-link">Dashboard</a></Link>
        <Link href="/dashboard/preferences" legacyBehavior><a className="nav-link">Dashboard Preferences</a></Link>
      </nav>

      <hr />
      <br />

      <div className="container">
        <div className="row">
          <div className="col">
          {props.children}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
