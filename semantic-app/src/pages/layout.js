import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/list">Clique pour aller voir tes préferences</Link><br/>
            <Link to="/create">Clique ici pour creer un compte</Link>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </>
  )
};

export default Layout;