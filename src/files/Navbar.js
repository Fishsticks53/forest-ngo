import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
        <div className="fixed w-full z-10">
            <div className="flex justify-between text-2xl pt-3 bg-black text-white pb-3 w-full">
                <Link to="/" className="mx-10 hover:underline">Home</Link>
                <Link to="/#Project" className="mx-10 hover:underline">Projects</Link>
                <Link to="/#Event" className="mx-10 hover:underline">Events</Link>
                <Link to="/#Blog" className="ml-10 mr-10 hover:underline">Blog</Link>
                <Link to="/contact" className="ml-auto mr-10 hover:underline">Contact Us</Link>
            
            </div>
            
        </div>
    );
}

export default Navbar;
