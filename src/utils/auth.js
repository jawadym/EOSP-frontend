class Auth {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  LogInAction() {
    if (this.username === "test" && this.password == "test") {
      return true;
    } else {
      return false;
    }
  }
}

export default Auth;
