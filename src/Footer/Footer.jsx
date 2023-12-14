import React, {useEffect} from "react";
import "./footer.scss";
import {SiYourtraveldottv} from "react-icons/si";
import {ImFacebook} from "react-icons/im";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Footer() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    return <div className={"footer"}>
        <div className={"secContainer container grid"}>
            <div className={"logo-div"}>
                <div data-aos={"fade-up"} data-aos-duration={"2000"} className={"footer-logo"}>
                    <a href={"#"} className={"logo flex"}>
                        <h2 className={"flex"}>
                            <SiYourtraveldottv className={"icon"}/>
                            Travel Advisor
                        </h2>
                    </a>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"3000"} className={"socials flex"}>
                    <ImFacebook className={"icon"}/>
                    <BsTwitter className={"icon"}/>
                    <AiFillInstagram className={"icon"}/>
                </div>
            </div>
            <div data-aos={"fade-up"} data-aos-duration={"4000"} className={"footer-links"}>
                    <span className={"linkTitle"}>Information</span>
                    <li>
                        <a href={"#"}>Home</a>
                    </li>
                    <li>
                        <a href={"#"}>Explore</a>
                    </li>
                    <li>
                        <a href={"#"}>Travel</a>
                    </li>
                    <li>
                        <a href={"#"}>Blogs</a>
                    </li>
            </div>
            <div data-aos={"fade-up"} data-aos-duration={"4500"} className={"footer-links"}>

                <span className={"linkTitle"}>Helper Links</span>
                <li>
                    <a href={"#"}>Tours & Travels</a>
                </li>
                <li>
                    <a href={"#"}>Help & Support</a>
                </li>

                <li>
                    <a href={"#"}>Privacy & Policies</a>
                </li>
                <li>
                    <a href={"#"}>Terms & Conditions</a>
                </li>
            </div>
            <div data-aos={"fade-up"} data-aos-duration={"5000"} className={"footer-links"}>
                             <span className={"linkTitle"}>
                        Contact-Us
                </span>
                <span className={"phone"}>+1234567890</span>
                <span className={"email"}>test123@gmail.com</span>
            </div>


        </div>
    </div>
}