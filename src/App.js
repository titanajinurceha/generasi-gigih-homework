import React from 'react';

import PrivateRoute from "./components/router/privateRouter";

import Landingpage from "./pages/Landingpage";
import CreatePlaylist from "./pages/CreatePlaylist";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CakhraProvider } from "@chakra-ui/react";

import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <CakhraProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Landingpage />
              </Route>
              <PrivateRoute
                component={CreatePlaylist}
                path="/create-playlist"
                exact
              />
            </Switch>
          </Router>
        </CakhraProvider>
      </Provider>
    </div>
  )
}

export default App;
