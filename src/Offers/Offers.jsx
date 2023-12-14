import React, {useEffect} from "react";
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from "react-icons/md";
import {FaWifi} from "react-icons/fa";
import {BsArrowRightShort} from "react-icons/bs";
import "./offers.scss";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Offers() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    const offers = [
        {
            id: 0,
            imgSrc: "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "Mexico",
            price: "₹1099"
        },
        {
            id: 1,
            imgSrc: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "Thailand",
            price: "₹999"
        },
        {
            id: 2,
            imgSrc: "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "London",
            price: "₹1999"
        },
        {
            id: 3,
            imgSrc: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Ping Point",
            location: "Goa",
            price: "₹2999"
        },
    ]
    return <section className={"offers container section"}>
        <div className={"sec-container"}>
            <div data-aos={"fade-up"} data-aos-duration={"2000"}
                 className={"secIntro"}>
                <h2 >Special Offers</h2>
                <p>
                    From historical cities to natural which are come see the best of the world!
                </p>
            </div>
            <div className={"mainContent grid"}>
                {
                    offers.map((value, index) => {
                        return <div data-aos={"fade-up"} data-aos-duration={"2500"}
                            className={"single-offer"} key={index}>
                            <div className={"destImage"}>
                                <img
                                    src={value.imgSrc}
                                    alt={value.desTitle}/>
                                <span className={"discount"}>
                            30% off
                        </span>
                            </div>
                            <div className={"offerBody"}>
                                <div className={"price flex"}>
                                    <h4>{value.price}</h4>
                                    <span className={"status"}>For Rent</span>
                                </div>
                                <div className={"amenities flex"}>
                                    {
                                        [
                                            {
                                                icon: <MdKingBed/>,
                                                text: "2 Beds"
                                            },
                                            {
                                                icon: <MdBathtub/>,
                                                text: "1 Bath"
                                            },
                                            {
                                                icon: <FaWifi/>,
                                                text: "Wi-Fi"
                                            },
                                            {
                                                icon: <MdAirportShuttle/>,
                                                text: "Shuttle"
                                            },
                                        ].map((value, index) => {
                                            return <div className={"singleAmenity flex"} key={index}>
                                        <span className={"icon"}>
                                            {value.icon}
                                        </span>
                                                <small>{value.text}</small>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className={"location flex"}>
                                    <MdLocationOn className={"icon"}/>
                                    <small>450 Vine #310, {value.location}</small>
                                </div>
                                <button className={"flex btn"}>
                                    View Details
                                    <BsArrowRightShort className={"icon"}/>
                                </button>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    </section>
}