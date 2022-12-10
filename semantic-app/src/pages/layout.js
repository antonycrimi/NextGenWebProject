import { Outlet, Link } from "react-router-dom";

//Page principal

const Layout = () => {
  return (
    <>
      <nav className="layout">
        <ul>
          <li>
          <Link className="link" to="/create">Create an account</Link><br/><br/><br/>
          <Link className="linkSeries" to="/listseries">SERIES</Link><br/>
          <Link className="linkFilm" to="/listfilm">FILM</Link><br/>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </>
  )
};

export default Layout;