import { render } from "react-dom";
import { useState, StrictMode, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarDesktop from "./components/NavbarDesktop";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(await res.json());
      const status = await res.status;
      status == 200 ? setLoggedIn(true) : setLoggedIn(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    isLoggedIn();
  });
  return (
    <StrictMode>
      <BrowserRouter>
        <NavbarDesktop loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route
            path="/dashboard//*"
            element={<Dashboard loggedIn={loggedIn} />}
          />
          <Route
            path="/"
            element={<Homepage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
