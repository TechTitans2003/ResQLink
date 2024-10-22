import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.png';

export default function Navbar() {
    return (
        <>
            <nav>
                <input type="checkbox" id="sidebar-active" />
                <img className='logo' src={logo} alt="" />
                <label htmlFor="sidebar-active" className="open-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </label>
                <label id="overlay" htmlFor="sidebar-active"></label>
                {/* <h1 className="title">
                    <Link to='/' className="">ResQLink</Link>
                    </h1> */}
                <div className="links-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </label>

                    <Link to='/' className="home-link">ResQLink</Link>
                    {/* <Link>About</Link>
                    <Link>Products</Link> */}
                    <Link to='/'>Login</Link>
                    
                </div>
            </nav>
        </>
    )
};
