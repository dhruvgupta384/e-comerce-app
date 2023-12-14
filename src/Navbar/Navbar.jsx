import React, {useState} from "react";
import "./Navbar.scss";
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import {motion} from "framer-motion";

export default function Navbar() {
    const [active, setActive] = useState("navbar");
    const [transparent, setTransparent] = useState('header')
    const showNav = () => {
        setActive('navbar activeNavbar')
    }
    const removeNav = () => {
        setActive('navbar')
    }
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader')
        } else {
            setTransparent("header")
        }
    }

    window.addEventListener('scroll', addBg)

    return <section
        className={"navbar-Section"}>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className={transparent}>
            <div className={"logo-div"}>
                <a href={"#"}>
                    <h1 className={"flex"}>
                        <SiYourtraveldottv/>
                        Travel Advisor
                    </h1>
                </a>
            </div>
            <div className={active}>
                <ul className={"navLists flex"}>
                    {
                        [
                            {
                                text: <a href={"#"} className={"navLink"}>Home</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Products</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Resources</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Contact</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Blog</a>
                            },

                        ].map(((value, index) => {
                            return <li className={"navItem"} key={index} onClick={removeNav}>
                                {value.text}
                            </li>


                        }))
                    }
                    <div className={"header-btn flex"}>
                        <button className={"btn login-btn"}>
                            <a href={"#"}>Login</a>
                        </button>
                        <button className={"btn"}>
                            <a href={"#"}>Sign Up</a>
                        </button>
                    </div>
                </ul>
                <div className={"closeNavbar"}
                >
                    <AiFillCloseCircle
                        onClick={removeNav}
                        className={"icon"}/>
                </div>
            </div>
            <div
                onClick={showNav}
                className={"toggleNavbar"}>
                <TbGridDots className={"icon"}/>
            </div>
        </motion.div>
    </section>
}