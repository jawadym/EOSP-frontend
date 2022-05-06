import {
  FormGroup,
  InputGroup,
  Switch,
  AnchorButton,
  Callout,
  Divider,
} from "@blueprintjs/core";
import { useState } from "react";
import "./LoginForm.css";
import Container from "./Container";
const LoginForm = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalidStatus, setInvalidStatus] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [sw, setSwitch] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await response;
      const status = res.status;
      const parsedJSON = await res.json();

      if (Math.trunc(status / 100) == 4) {
        setInvalidStatus(true);
        setInvalidMessage(parsedJSON.message);
        setLoading(false);
      } else {
        localStorage.setItem("token", parsedJSON.token);
        setLoading(false);
        setLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <FormGroup label={"Email"} labelFor="un-input">
        <InputGroup
          value={email}
          id="un-input"
          placeholder="John@ey.com"
          small={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup label={"Password"} labelFor="un-input">
        <InputGroup
          id="pw-input"
          placeholder="****"
          small={true}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup labelInfo={"(required)"}>
        <Switch
          label="Remember me"
          onChange={() => setSwitch(!sw)}
          checked={sw}
        />
        {sw && (
          <Callout intent="primary">
            Your password will be saved for future login.
          </Callout>
        )}
        {invalidStatus && <Callout intent="warning">{invalidMessage}</Callout>}
      </FormGroup>
      <Divider />
      <AnchorButton loading={loading} text="Sign in" onClick={handleSignIn} />
    </Container>
  );
};

export default LoginForm;
