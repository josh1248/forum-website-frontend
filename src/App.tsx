import Home from "./pages/Home";
import { HOME_ROUTE, CREATE_USER_ROUTE, LOGIN_USER_ROUTE, ALL_USERS_ROUTE, ALL_POSTS_ROUTE } from "./configs/config";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AllUsers from "./pages/AllUsers";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { blue, orange } from "@mui/material/colors";
import AllPosts from "./pages/AllPosts";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path={HOME_ROUTE} element={<Home />} />
                        <Route path={ALL_USERS_ROUTE} element={<AllUsers />} />
                        <Route path={ALL_POSTS_ROUTE} element={<AllPosts />} />
                        <Route path={CREATE_USER_ROUTE} element={<SignUp />} />
                        <Route path={LOGIN_USER_ROUTE} element={<SignIn />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
