import Link from "next/link";

export default function Layout(props) {
  return (
    <>
      <h1>Week 5 - InClass</h1>

      <nav className="nav navbar-light bg-light">
        <Link href="/" legacyBehavior><a className="nav-link active">Home</a></Link>
        <Link href="/landing" legacyBehavior><a className="nav-link">Landing</a></Link>
        
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Employees
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <li><Link href="/employees" legacyBehavior><a className="nav-link">/employees</a></Link></li>
            <li><Link href="/employees?department=HR" legacyBehavior><a className="nav-link">/employees?department=HR</a></Link></li>
            <li><Link href="/employees?status=active" legacyBehavior><a className="nav-link">/employees?status=active</a></Link></li>
            <li><Link href="/employees?department=IT&status=active" legacyBehavior><a className="nav-link">/employees?department=it&status=active</a></Link></li>
        </ul>

        <Link href="/employees/22" legacyBehavior><a className="nav-link">Employee 22</a></Link>
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
