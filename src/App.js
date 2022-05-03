import { render } from "react-dom";
import { useState, StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarDesktop from "./components/NavbarDesktop";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <StrictMode>
      <BrowserRouter>
        <NavbarDesktop loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/dashboard//*" element={<Dashboard />} />
          <Route path="/" element={<Homepage setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
