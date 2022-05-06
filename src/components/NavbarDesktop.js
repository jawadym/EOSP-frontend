import {
  Alignment,
  Button,
  Classes,
  Colors,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import eyLOGO from "../assets/ey.png";

const NavbarDesktop = ({ loggedIn, setLoggedIn }) => {
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <Navbar style={{ backgroundColor: Colors.BLACK }}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link to="/" style={{ textDecoration: "none", color: Colors.WHITE }}>
            <img src={eyLOGO} alt="EY LOGO" width="30px" />
            Malware Analysis Platform
          </Link>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {loggedIn ? (
          <Button
            className={Classes.MINIMAL}
            icon="log-out"
            text="Sign out"
            onClick={handleLogOut}
            style={{ color: Colors.WHITE }}
          />
        ) : (
          <Button
            className={Classes.MINIMAL}
            disabled={true}
            icon="log-in"
            text="Sign in"
            style={{ color: Colors.WHITE }}
          />
        )}
      </NavbarGroup>
    </Navbar>
  );
};

export default NavbarDesktop;
