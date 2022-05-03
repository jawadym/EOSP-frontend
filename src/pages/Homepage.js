import GridContainer from "../components/GridContainer";
import GridItem from "../components/GridItem";
import Leading from "../components/Leading";
import LoginForm from "../components/LoginForm";
const Homepage = ({ setLoggedIn }) => {
  return (
    <>
      <GridContainer>
        <GridItem>
          <Leading
            heading="Malware Analysis Space"
            description="Sign in and start analyzing malware samples."
            BREADCRUMBS={[
              { href: "/", text: "Home" },
              { href: "/login", icon: "log-in", text: "login" },
            ]}
          />
        </GridItem>
        <GridItem></GridItem>
      </GridContainer>
      <LoginForm setLoggedIn={setLoggedIn} />
    </>
  );
};

export default Homepage;
