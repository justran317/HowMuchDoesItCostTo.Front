import { NavLink, Outlet } from "react-router-dom";

export default function PagesLayout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="brand">HowMuchDoesItCost????</h1>

          <NavLink to="home">Home</NavLink>
          <NavLink to="register">Register</NavLink>
          <NavLink to="faq">FAQ</NavLink>
          <NavLink to="test">test</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
