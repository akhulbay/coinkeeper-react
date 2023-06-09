import hm from "./Header.module.css";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";

function Header() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={hm.header}>
            <div className={hm.logo}>
                <Link to={"/main"}>
                    <img src="https://miro.medium.com/max/2400/1*Ai6oM17_tAYK3KMAXbgpgg.png" alt=""/>
                </Link>
                <h4>CoinKeeper</h4>
            </div>

            <button
                type="button"
                className={hm.account}
                onClick={() => setModalActive(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={hm.accounticon}
                    viewBox="0 0 16 16"
                >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                </svg>
            </button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default Header;
