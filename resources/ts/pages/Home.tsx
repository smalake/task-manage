import React from "react";
import { useRecoilValue } from "recoil";
import { createRandom } from "../lib/random";
import { loginCookieState } from "../recoil/loginCookie";

const Home = () => {
    const loginCookie = useRecoilValue(loginCookieState);
    console.log(loginCookie.value);
    console.log(loginCookie.key);
    return <div>Home</div>;
};

export default Home;
