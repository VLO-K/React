import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <div className="">
            <header id="nav">
                <div className="nav-container">
                    {/* Logo */}
                    <div className="logo">
                        <a href="/">
                            <img
                                src={require("../../Assets/Img/home_hl.png")}
                                draggable="false"
                                alt="AU"
                                height="50"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    {/* Logo */}
                    {/* Navigation Menu Desktop */}
                    <div className="nav-desktop">
                        <div className="nav">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/pricing">Pricing</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                    <a href="/signup" className="nav-signin">
                        Get Started
                    </a>
                    {/* Navigation Menu Desktop */}
                    {/* Navigation Menu Phone */}
                    <div className="nav-phone">
                        <input type="checkbox" id="nav-btn" />
                        <label htmlFor="nav-btn" className="nav-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className="nav-wrapper">
                            <div className="nav-menu">
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                                <a href="/pricing">Pricing</a>
                                <a href="/contact">Contact</a>
                                <a href="/signin">Sign In</a>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Menu Phone */}
                </div>
            </header>
        </div>
    );
};

export default NavigationBar;
