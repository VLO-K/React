import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div id="icon-footer"></div>
            <div id="navigation-footer">
                <a href="/">Home</a>
                <a href="/signin">Sign In</a>
                <a href="/dashboard">Dashboard</a>
            </div>
            <div id="company-footer"></div>
            <div id="social-footer"></div>
        </div>
    );
};

export default Footer;
