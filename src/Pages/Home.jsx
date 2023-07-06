import NavigationBar from "../Common/Components/NavigationBar";
import Footer from "../Common/Components/Footer";

import { useEffect } from "react";
import { initCarousel } from "./Home/carousel";

import "./Home.css";

const Home = () => {
    useEffect(() => {
        initCarousel(); // Invoke the carousel logic when the component mounts
    }, []);

    return (
        <div className="content">
            <NavigationBar />

            <div className="content-container">
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className="home-left-side">
                            <p className="home-title1">
                                First Free
                                <br />
                                Digital Cashier On
                                <br />
                                Website
                            </p>
                            <p className="home-title2">
                                Presents various useful features and funstion
                                that are suitable for startup business without
                                any fee
                            </p>
                            <a className="home-button" href="/signin">
                                Sign In
                            </a>
                        </div>
                        <div className="home-right-side">
                            <img
                                className="home-image"
                                src={require("../Assets/Img/home_hl.png")}
                                alt="HighLights 1"
                                draggable="false"
                                loading="lazy"
                                onClick="onClick(this)"
                                oncontextmenu="return false;"
                            />
                        </div>
                    </div>
                </div>

                <div class="carousel">
                    <button class="btn-arrow btn-arrow-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </button>
                    <button class="btn-arrow btn-arrow-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                    <div class="inner">
                        <ul class="container">
                            <li class="slide slide-1">
                                <h1>SLIDE 1</h1>
                            </li>
                            <li class="slide slide-2">
                                <h1>SLIDE 2</h1>
                            </li>
                            <li class="slide slide-3">
                                <h1>SLIDE 3</h1>
                            </li>
                        </ul>
                    </div>
                    <div class="dots"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
