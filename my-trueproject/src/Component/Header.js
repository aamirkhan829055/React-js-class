import React from "react";
import Logo from "../images/logo.svg";
import { useState } from "react";
import user from "../images/user.svg";
import sercrh from "../images/sercrh.svg";
import hart from "../images/hart.svg";
function Header() {
    const [toggleDrop, setToggleDrop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="d-md-flex align-items-center justify-content-between py-4">
                    <div className="d-flex justify-content-between">
                        <a href="#"><img src={Logo} width={"120px"} /></a>
                        <a href="#" className="fa-solid dis fa-bars fa-2x text-black d-md-none" onClick={handleToggle}></a>
                    </div>
                    <ul className={`d-md-flex  gap-5 m-0 ${isOpen ? '' : 'hidden'}`}>
                        <li>
                            <a className="text-black list-item-1 py-3" href="#">Home</a>
                        </li>
                        <li>
                            <a className="text-black list-item-1 py-3" href="#">Shop</a>
                        </li>
                        <li>
                            <a className="text-black list-item-1 py-3" href="#">About</a>
                        </li>
                        <li>
                            <a className="text-black list-item-1 py-3" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className={`d-md-flex flex align-items-center gap-3 m-0  ${isOpen ? '' : 'hidden'}`}>
                        <li className="d-inline-block">
                            <a href="#">
                                <img src={user} width={"30px"} />{" "}
                            </a>
                        </li>
                        <li className="d-inline-block md-px-3">
                            <a href="#">
                                <img src={sercrh} width={"30px"} />{" "}
                            </a>
                        </li>
                        <li className="d-inline-block md-px-3">
                            <a href="#">
                                <img src={hart} width={"30px"} />{" "}
                            </a>
                        </li>
                        <li className="d-inline-block md-px-3">
                            <a href="#">
                                <img src={user} width={"30px"} />{" "}
                            </a>
                        </li>
                    </ul>

                </nav>
            </div >
        </header >
    );
}

export default Header;
