import React, {useEffect} from "react";
import "./places.scss";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {SiYourtraveldottv} from "react-icons/si";
import Aos from "aos";
import 'aos/dist/aos.css';


export default function Places() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    const data = [
        {
            id: 0,
            imgSrc: "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "Mexico",
            grade: "Cultural relax"
        },
        {
            id: 1,
            imgSrc: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "Thailand",
            grade: "Mind relax"
        },
        {
            id: 2,
            imgSrc: "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Guanajuato",
            location: "London",
            grade: "For fun"
        },
        {
            id: 3,
            imgSrc: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desTitle: "Ping Point",
            location: "Goa",
            grade: "For entertainment"
        },
    ]
    return <section className={"places section container"}>
        <div className={"sec-container"}>
            <div className={"secHeader flex"}>
                <div className={"text-div"} data-aos={"fade-right"}>
                    <h2>Popular Destination</h2>
                    <p>
                        From historical cities to natural spectaculars,
                        come to see the best of the world!
                    </p>
                </div>
                <div className={"icons-div flex"} data-aos={"fade-left"}>
                    <BsArrowLeftShort className={"icon left-icon"}/>
                    <BsArrowRightShort className={"icon"}/>
                </div>
            </div>
            <div className={"mainContent grid"}>
                {data.map((value, index) => {
                    return <div data-aos={"fade-up"} className={"singleDestination"} key={index}>
                        <div className={"destImage"}>
                            <img
                                src={value.imgSrc}
                                alt={"image title"}/>
                            <div className={"overlayInfo"}>
                                <h3>{value.desTitle}</h3>
                                <p>
                                    {value.grade}
                                </p>
                                <BsArrowRightShort className={"icon"}/>

                            </div>
                        </div>
                        <div className={"desFooter"}>
                            <div className={"number"}>
                               0{index+1}
                            </div>
                            <div className={"desText flex"}>
                                <h6>{value.location}</h6>
                                <span className={"flex"}>
                                <span className={"dot"}>
                                    <SiYourtraveldottv className={"icon"}/>
                                   <span>Travel Advisor</span>
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </section>


}