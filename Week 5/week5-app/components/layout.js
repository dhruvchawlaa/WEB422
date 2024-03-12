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

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Route Params
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <li><Link href="/products/5" legacyBehavior><a className="nav-link">/products/5</a></Link></li>
            <li><Link href="/products/33" legacyBehavior><a className="nav-link">/products/33</a></Link></li>
            <li><Link href="/products/422" legacyBehavior><a className="nav-link">/products/422</a></Link></li>
        </ul>

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Query Params
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
            <li><Link href="/products?page=1&category=stationery" legacyBehavior><a className="nav-link">/products?page=1&category=stationery</a></Link></li>
            <li><Link href="/products" legacyBehavior><a className="nav-link">/products (no query parameters)</a></Link></li>
        </ul>

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Routes with 'getStaticProps'
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
            <li><Link href="/post/4" legacyBehavior><a className="nav-link">/post/4</a></Link></li>
            <li><Link href="/post/5" legacyBehavior><a className="nav-link">/post/5</a></Link></li>
            <li><Link href="/post/6" legacyBehavior><a className="nav-link">/post/6 - SSR or not supported</a></Link></li>
        </ul>

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Error Pages
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
            <li><Link href="/404" legacyBehavior><a className="nav-link">/404</a></Link></li>
            <li><Link href="/500" legacyBehavior><a className="nav-link">/500</a></Link></li>
            <li><Link href="/asdfghjk" legacyBehavior><a className="nav-link">/asdfghjk</a></Link></li>
        </ul>
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
