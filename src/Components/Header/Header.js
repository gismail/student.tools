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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 50"  version="1.1"><path d="M0 41L21.5 40.8C43 40.7 86 40.3 128.8 43.2C171.7 46 214.3 52 257.2 49.8C300 47.7 343 37.3 385.8 35.7C428.7 34 471.3 41 514.2 42.5C557 44 600 40 642.8 41.2C685.7 42.3 728.3 48.7 771.2 47.3C814 46 857 37 878.5 32.5L900 28L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill={scrollY>0?"#232e3e":"transparent"} strokeLinecap="round" strokeLinejoin="miter"></path></svg>
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
