import rg from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
    let Navigate = useNavigate();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();
    const checkUser = (usersArray, existLogin, existPassword) => {
        for (let i = 0; i < usersArray.length; i++) {
            if (
                usersArray[i].login == existLogin &&
                usersArray[i].password == existPassword
            ) {
                return true;
            }
        }
        return false;
    };
    function clickButton(event) {
        let loginIn = JSON.parse(localStorage.getItem("loginIn"));
        if (login != "" && password != "") {
            if (loginIn) {
                if (checkUser(loginIn.users, login, password)) {
                    alert("User Exist!!");
                    Navigate("/");
                } else {
                    loginIn.users.push({
                        login: login,
                        password: password,
                        isAuth: false,
                    });
                    localStorage.setItem("logInfo", JSON.stringify(loginIn));
                    Navigate("/");
                }
            } else {
                localStorage.setItem(
                    "loginIn",
                    JSON.stringify({
                        users: [{ login: login, password: password, isAuth: false }],
                    })
                );
                Navigate("/");
            }
        } else {
            alert("Login or password is empty");
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") clickButton();
    };
    return (
        <div className={rg.container}>
            <div className={rg.form}>
                <div className={rg.title}>Register</div>
                <div className={rg.block}>
                    <h3>Email:</h3>
                    <input
                        className={rg.input}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div className={rg.block}>
                    <h3>Password:</h3>
                    <input
                        onKeyUp={(e) => handleKeyUp(e)}
                        className={rg.input}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className={rg.loginbtn}
                    onClick={(event) => clickButton(event)}
                >
                    Register
                </button>
                <p className={rg.subtext}>
                    Already have an account?
                    <NavLink
                        to="/"
                        className={(navData) => (navData.isActive ? rg.active : "")}
                    >
                        {""}
                        <label className={rg.link}>Log in</label>
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default SignUp;