import React, {useEffect} from "react";
import "./home.scss";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])


    return <section className={"home"}>
        <div className={"container"}>
            <div className={"home-text"} >
                <h1 data-aos={"fade-up"}>
                    Plan Your Trip With Travel Advisor
                </h1>

                <p data-aos={"fade-up"} data-aos-duration={"2500"}>
                    Travel to your favourite city with respectful of the environment!
                </p>

                <button className={"btn"} data-aos={"fade-up"} data-aos-duration={"3000"}>
                    <a href={"#"}>Explore Now</a>
                </button>

            </div>
            <form className={"home-card grid"} >
                <div data-aos={"fade-right"} data-aos-duration={"2000"}>
                    <label htmlFor={"location"}>Location</label>
                    <input type={'text'} placeholder={"Dream Destination"}/>
                </div>
                <div data-aos={"fade-right"} data-aos-duration={"2500"}>
                    <label htmlFor={"distance"}>Distance</label>
                    <input type={'text'} placeholder={"11/Meters"}/>
                </div>
                <div data-aos={"fade-right"} data-aos-duration={"3000"}>
                    <label htmlFor={"price"}>Price</label>
                    <input type={'text'} placeholder={"₹500-₹1000"}/>
                </div>
                <button data-aos={"fade-left"} data-aos-duration={"2000"}
                    className={"btn"}>
                    Search
                </button>
            </form>

        </div>
    </section>
}