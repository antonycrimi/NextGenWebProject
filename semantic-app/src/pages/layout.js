import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
          <Link to="/create">Click to create an account</Link><br/><br/><br/>
            <Link to="/listseries">Click to see your series</Link><br/>
            <Link to="/listfilm">Click to see your film</Link><br/>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </>
  )
};

export default Layout;