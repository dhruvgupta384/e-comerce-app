import React, {useEffect} from "react";
import "./about.scss";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {

        Aos.init({duration: 2000})

    }, [])
    return <section className={"about section"}>
        <div className={"secContainer"}>
            <div className={"title"}  data-aos={"fade-up"} data-aos-duration={"2000"}>
                Why Hikings ?
            </div>
            <div className={"mainContent container grid"}>

                {
                    [
                        {
                            img: "https://i.pinimg.com/564x/25/3d/e5/253de59d59105f24e3d2183d1c83f01e.jpg",
                            title: "1000+ Mountains",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/cb/c4/29/cbc4291d3fbf0ccc92e325923f528990.jpg",
                            title: "1000+ Hikings",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/3f/68/a1/3f68a1d14bcb3f86629275103a730a6c.jpg",
                            title: "1000+ Customers",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },

                    ].map((value, index) => {
                        return <div
                            data-aos={"fade-up"} data-aos-duration={"2500"}
                            className={"singleItem"} key={index}>
                            <img src={value.img} alt={"Image Name"}/>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    })
                }
            </div>
            <div className={"videoCard container"}>
                <div data-aos={"fade-left"} data-aos-duration={"2000"} className={"cardContent grid"}>
                    <h2>Wonderful House experience in there!</h2>
                    <p>
                        It’s important to spend those 18 summers with your children wisely.
                        Take them someplace that can create lasting memories.
                    </p>

                </div>
                <div data-aos={"fade-right"} data-aos-duration={"2000"} className={"cardVideo"}>
                    <img
                        src={"https://i.pinimg.com/originals/43/e0/20/43e0208b67c685c36a4ea1850614e2d5.gif"}
                        alt={""}
                    />

                </div>
            </div>
        </div>
    </section>
}