import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logo-1.png';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="navbar" style={{ position: "fixed", width: "100%", backgroundColor: scrollY > 0 ? "#3F51B5" : "transparent" }} className="p-2 d-flex justify-content-between align-items-center h-10vh">
            <div className="d-flex justify-content-start">
                <Link to="/home" className='mb-3'>
                    <img src={logo} className='n-img'/>
                </Link>
                <Link to='/home' className="text-decoration-none m-3 text-white">
                    Home
                </Link>
                <Link to='/medicine' className="text-decoration-none m-3 text-white">
                    Medicine
                </Link>
                <Link to='/hazards' className="text-decoration-none m-3 text-white">
                    Hazards
                </Link>
                <Link to='/about' className="text-decoration-none m-3 text-white">
                    About Us
                </Link>
            </div>
            <div className="d-flex justify-content-end">
                <Link to='/profile' className="text-decoration-none m-3 text-white">
                    Profile
                </Link>
                <Link to='/' className="text-decoration-none m-3 text-white">
                    Log Out
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
