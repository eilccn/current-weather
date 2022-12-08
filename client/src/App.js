import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import { PREPEND_PATH } from "./constants/actionTypes.js";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const App = () => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const path = process.env.REACT_APP_BASE_URL;
  console.log(path);
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path={PREPEND_PATH + "/posts"} exact element={<Home />} />
            <Route
              path={PREPEND_PATH + "/posts/search"}
              exact
              element={<Home />}
            />
            <Route
              path={PREPEND_PATH + "/posts/:id"}
              element={<PostDetails />}
            />
            <Route exact path={PREPEND_PATH + "/auth"} element={<Auth />} />
            <Route
              replace={true}
              path={PREPEND_PATH + "/"}
              element={<Navigate to={PREPEND_PATH + "/posts"} />}
            />
            <Route
              replace={true}
              path={"/"}
              element={<Navigate to={PREPEND_PATH + "/posts"} />}
            />
          </Routes>
        </Container>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
