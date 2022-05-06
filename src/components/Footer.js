import { Colors, Navbar } from "@blueprintjs/core";

const Footer = () => {
  return (
    <Navbar
      style={{
        backgroundColor: Colors.BLACK,
        position: "fixed",
        left: "0",
        height: "0.5vh",
        bottom: "0",
      }}
    ></Navbar>
  );
};

export default Footer;
