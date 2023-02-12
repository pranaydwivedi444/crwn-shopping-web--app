import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import "./navigation.styles.scss";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/Authentication">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Navigation;
