//App.js
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles/main.css";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./containers/ThemeContext";
import Cursor from "./components/Cursor";
import { isMobile } from "react-device-detect";

// import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {!isMobile && <Cursor />}
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/:locale(en)" exact component={Home} /> */}
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
