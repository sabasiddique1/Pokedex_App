import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Wrapper from "./sections/Wrapper/wrapper";
import Search from "./pages/Search/search";
import Pokemon from "./pages/Pokemon/pokemon";
import Favorites from "./pages/Favorites/favorite";
import Footer from "./sections/Footer/footer";
function App() {
  return (
    <>
      <div className="main-container"></div>
      <div className="app">
        <BrowserRouter>
          <Wrapper className="wrapper">
          <Route exact path="/">
              <Redirect to="/pokemon" />
            </Route>
            <Route exact path="/pokemon">

              <Search />
            </Route>
            <Route exact path="/pokemon/:pokemon">
              <Pokemon />
            </Route>
            <Route exact path="/favorites/:pokemon">
              <Pokemon />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Wrapper>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
