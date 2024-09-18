import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarSubmenu from '../SideBarSubMenu/SideBarSubMenu';

import logo from '../../../assets/logo.png';

import './SideBar.css';

export default function SideBar() {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        if (navbarRef.current) {
            navbarRef.current.classList.toggle('active');
        }
    };

    // Function to handle submenu toggling
    const toggleSubmenu = (id) => {
        setActiveSubmenu((prevActive) => (prevActive === id ? null : id));
    };

    return (
        <>
            {/* <!-- start: SIDEBAR --> */}
            <section id="sidebar" ref={navbarRef}>
                <section id="sidebar-mobile" onClick={toggleNavbar}>
                    <i className="ri-close-large-line"></i>
                    {/* <img src={logo} alt="" /> */}
                </section>
                <Link to="user/dashboard" className="brand">
                    <img src={logo} alt="" />
                    {/* <i className="ri-fire-line"></i> */}
                </Link>

                <ul className="sidebar__menu">
                    {/* Home Icon as a Link */}
                    <li>
                        <Link to="user/dashboard" className="menu-icon-link">
                            <i className="ri-home-4-fill"></i>
                            <span className="hover-label">Home</span>
                        </Link>
                    </li>

                    {/* Other Sidebar items with Submenus */}
                    <SidebarSubmenu
                        id="components"
                        title={<i className="ri-airplay-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                    >
                        <li className="title">Devices</li>
                        <li><Link to='user/device-details'>See Devices List</Link></li>
                        <li><Link to='user/device-details/list/new/Device-Name'>Add Device</Link></li>
                    </SidebarSubmenu>

                    {/* <SidebarSubmenu
                        id="forms"
                        title={<i className="ri-clipboard-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                    >
                        <li className="title">Track Device</li>
                    </SidebarSubmenu>

                    <SidebarSubmenu
                        id="pages"
                        title={<i className="ri-file-2-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                    >
                        <li className="title">Pages</li>
                        <li>
                            <a href="#">Authentication <i className="ph-caret-right-fill"></i></a>
                            <ul className="sidebar__dropdown-menu">
                                <li><a href="#">Login page</a></li>
                                <li><a href="#">Register page</a></li>
                                <li><a href="#">Forgot password</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Landing page</a></li>
                        <li>
                            <a href="#">Error <i className="ph-caret-right-fill"></i></a>
                            <ul className="sidebar__dropdown-menu">
                                <li><a href="#">404</a></li>
                                <li><a href="#">503</a></li>
                                <li><a href="#">Maintenance</a></li>
                            </ul>
                        </li>
                    </SidebarSubmenu>

                    <SidebarSubmenu
                        id="accounts"
                        title={<i className="ri-user-2-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                    >
                        <li className="title">Accounts</li>
                        <li><a href="#">User settings</a></li>
                        <li><a href="#">Change password</a></li>
                    </SidebarSubmenu> */}

                    <li className="divider"></li>
                    <li>
                        <Link ><i className="ri-settings-5-fill"></i></Link>
                    </li>
                    <li>
                        <Link to='/admin/logout' className="logout"><i className="ri-logout-box-line"></i></Link>
                    </li>
                </ul>
            </section>

            {/* <!-- start: SIDEBAR OVERLAY --> */}
            <div className="sidebar-overlay"></div>

            {/* <!-- start: SIDEBAR MOBILE --> */}
            <section id="sidebar-mobile" onClick={toggleNavbar}>
                <i className="ri-menu-2-line toggle-sidebar"></i>
                <Link to="/" className="brand">
                    <img src={logo} alt="" />
                    ResQLink
                </Link>
            </section>
            {/* <!-- end: SIDEBAR MOBILE --> */}
        </>
    );
}
