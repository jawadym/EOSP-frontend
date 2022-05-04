import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Colors
} from "@blueprintjs/core"
import { Link } from "react-router-dom";


const NavbarDesktop = ({loggedIn}) => {
    return (
    <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading><Link to="/" style={{ textDecoration: 'none'}}>EY Project</Link></NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
            {loggedIn ? <Button className={Classes.MINIMAL} icon="log-out" text="Sign out" />: <Button className={Classes.MINIMAL} icon="log-in" text="Sign in" />}
        </NavbarGroup>
    </Navbar>)
}

export default NavbarDesktop;