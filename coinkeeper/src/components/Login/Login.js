import lg from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";


function Login({setIsAuth}) {
    let loginIn = JSON.parse(localStorage.getItem("loginIn"));
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();
    let Navigate = useNavigate();
    const checkUser = (usersArray, existLogin, existPassword) => {
        for (let i = 0; i < usersArray.length; i++) {
            if (
                usersArray[i].login == existLogin &&
                usersArray[i].password == existPassword
            ) {
                usersArray[i].isAuth = true;
                loginIn.users[i] = {
                    login: existLogin,
                    password: existPassword,
                    isAuth: true,
                };
                localStorage.setItem("loginIn", JSON.stringify(loginIn));
                setIsAuth(true);
                return true;
            }
        }
        return false;
    };

    const clickButton = () => {
        if (loginIn) {
            if (checkUser(loginIn.users, login, password)) {
                Navigate("/main");
            } else alert("Incorrect password or login");
        } else {
            alert("User does't exist");
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") clickButton();
    };
    return (
        <div className={lg.container}>
            <div className={lg.form}>
                <div className={lg.title}>Login</div>
                <div className={lg.block}>
                    <h3>Email:</h3>
                    <input className={lg.input}
                           onChange={(e) => setLogin(e.target.value)}/>
                </div>

                <div className={lg.block}>
                    <h3>Password:</h3>
                    <input
                        onKeyUp={(e) => handleKeyUp(e)}
                        type="password"
                        className={lg.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className={lg.loginbtn} onClick={clickButton}>
                    Log in
                </button>
                <p className={lg.subtext}>
                    Don't have an account?
                    <NavLink
                        to="/register"
                        className={(navData) => (navData.isActive ? lg.active : "")}
                    >
                        {""}
                        <label className={lg.link}>Register</label>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;