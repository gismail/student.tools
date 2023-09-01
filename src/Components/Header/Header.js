// Header.js
import './Header.css';
import React, { useEffect, useState } from "react";

function Header() {
    // State to store the scroll position
    const [scrollY, setScrollY] = useState(0);
    // Function to update the scroll position
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    // Add a scroll listener to the window object
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`header ${scrollY > 0 ? "scrolled" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill={scrollY>0?"#333":"transparent"} fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,117.3C672,107,768,117,864,117.3C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <h1>eTools</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
