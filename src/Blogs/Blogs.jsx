import React, {useEffect} from "react";
import "./Blogs.scss"
import {BsArrowRightShort} from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Blogs() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    const blogs = [
        {
            image: "https://www.thetrainline.com/cms/media/1328/uk_cotsworld.jpg?mode=crop&width=860&height=574&quality=70",
            title: "Living Rainforest",
            description: "Most come for its seven miles of golden sands, but it’s also home to a thriving bar scene and great shops. "
        },
        {
            image: "https://www.thetrainline.com/cms/media/1419/italy-lake-garda.jpg?mode=crop&width=860&height=574&quality=70",
            title: "Blenheim Palace",
            description: "Welcome to our travel inspiration blog. Here's where you'll find amazing travel ideas. "
        },
        {
            image: "https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=860&height=574&quality=70",
            title: "Oxford to Paris",
            description: "London has it all, whether you fancy a day shopping on Oxford Street, or a boat ride along the River Thames taking in the historical sights.. "
        },
        {
            image: "https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Rainforest",
            description: "Most come for its seven miles of golden sands, but it’s also home to a thriving bar scene and great shops. "
        },
    ]
    return <section className={"blogs container section"}>
        <div className={"secIntro"}>
            <h2 data-aos={"fade-up"} data-aos-duration={"2000"}>Our Travel Blogs ?</h2>
            <p data-aos={"fade-up"} data-aos-duration={"2500"}>
                You can experience best in the world.
            </p>
        </div>
        <div className={"mainContainer grid"}>
            {
                blogs.map((value, index) => {
                    return <div data-aos={"fade-up"} data-aos-duration={"2000"}
                                className={"singlePost grid"} key={index}>
                        <div className={"imgDiv"}>
                            <img
                                src={value.image}
                                alt={""}/>
                        </div>
                        <div className={"postDetails"}>
                            <h3 data-aos={"fade-up"} data-aos-duration={"3000"}>{value.title}</h3>
                            <p data-aos={"fade-up"} data-aos-duration={"4000"}>{value.description}</p>
                        </div>
                        <a href={"#"} className={"flex"} data-aos={"fade-up"} data-aos-duration={"4500"}>
                            Read More
                            <BsArrowRightShort className={"icon"}/>
                        </a>
                    </div>
                })
            }

        </div>
    </section>
}