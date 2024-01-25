import HelloWorld from "../components/HelloWorld";
import { CREATE_USER_ROUTE, LOGIN_USER_ROUTE, ALL_USERS_ROUTE, ALL_POSTS_ROUTE } from "../configs/config";

import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <HelloWorld />
            <Link to={ALL_USERS_ROUTE}>(DB check) See All Users here</Link>
            <br />
            <Link to={ALL_POSTS_ROUTE}>(DB check) See All Posts here</Link>
            <br />
            <Link to={CREATE_USER_ROUTE}>Register</Link>
            <br />
            <Link to={LOGIN_USER_ROUTE}>Login</Link>
        </>
    );
};

export default Home;
