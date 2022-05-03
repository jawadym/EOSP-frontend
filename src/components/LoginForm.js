import {
  FormGroup,
  InputGroup,
  Switch,
  AnchorButton,
  Callout,
  Divider,
} from "@blueprintjs/core";
import { useState, useLayoutEffect, useRef } from "react";
import Auth from "../utils/auth";
import "./LoginForm.css";
import Container from "./Container";
const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sw, setSwitch] = useState(false);

  const [status, setStatus] = useState("init");
  const [rightCreds, setRightCreds] = useState(false);
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const auth = new Auth(username, password);
    if (status === "pending") {
      setRightCreds(auth.LogInAction());
      setStatus("done");
      setLoggedIn(auth.LogInAction());
    }
  }, [status]);

  return (
    <Container>
      <FormGroup label={"Username"} labelFor="un-input">
        <InputGroup
          value={username}
          id="un-input"
          placeholder="John D"
          small={true}
          onChange={(e) => setUsername(e.target.value)}
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
        {!rightCreds && !firstUpdate.current && (
          <Callout intent="warning">Wrong credentials</Callout>
        )}
      </FormGroup>
      <Divider />
      <AnchorButton
        text="Sign in"
        onClick={() => {
          setStatus("pending");
        }}
      />
    </Container>
  );
};

export default LoginForm;
