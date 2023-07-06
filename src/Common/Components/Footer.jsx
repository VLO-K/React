import React from "react";

import "./Footer.css";

import InstagramIcon from "../../Assets/Img/instagram.png";
import YoutubeIcon from "../../Assets/Img/youtube.png";
import DiscordIcon from "../../Assets/Img/discord.png";
import GithubIcon from "../../Assets/Img/github.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="navigation-footer">
                    <a href="/">Home</a>
                    <a href="/signin">Sign In</a>
                    <a href="/dashboard">Dashboard</a>
                </div>
                <div className="social-footer">
                    <div className="socmed">
                        <a
                            className="socmed-link"
                            href="https://www.instagram.com/nevylloproman"
                        >
                            <img
                                src={InstagramIcon}
                                draggable="false"
                                alt="Instagram: @nevylloproman"
                                height="20"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="socmed-link"
                            href="https://www.youtube.com/@vlovlovlo"
                        >
                            <img
                                src={YoutubeIcon}
                                draggable="false"
                                alt="Youtube: VLOVLOVLO"
                                height="20"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="socmed-link"
                            href="https://discord.gg/SRWRdzZmur"
                        >
                            <img
                                src={DiscordIcon}
                                draggable="false"
                                alt="Discord: Glee Community"
                                height="20"
                                loading="lazy"
                            />
                        </a>
                        <a
                            className="socmed-link"
                            href="https://github.com/VLO-K"
                        >
                            <img
                                src={GithubIcon}
                                draggable="false"
                                alt="Github: VLO-K"
                                height="20"
                                loading="lazy"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <p className="footer-cr">
                    &copy; 2022 Nevyllo Zamuel Kalangi All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
