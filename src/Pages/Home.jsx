import NavigationBar from "../Common/Components/NavigationBar";
// import Footer from '../Common/Components/Footer';

import "./Home.css";

const Home = () => {
    return (
        <div className="content">
            <NavigationBar />

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
                            Presents various useful features and funstion that
                            are suitable for startup business without any fee
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
        </div>
    );
};

export default Home;
