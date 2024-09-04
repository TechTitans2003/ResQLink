import React, { useRef, useState } from 'react';
import './SideBar.css';
import SidebarSubmenu from '../SideBarSubMenu/SideBarSubMenu';

export default function SideBar() {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        if (navbarRef.current) {
            navbarRef.current.classList.toggle('active');
        }
    };

    return (
        <>
            {/* <!-- start: SIDEBAR --> */}
            <section id="sidebar" ref={navbarRef}>
                <section id="sidebar-mobile" onClick={toggleNavbar}>
                    <i className="ri-close-large-line"></i>
                </section>
                <a href="#" className="brand">
                    <i className="ri-fire-line"></i>
                </a>

                <ul className="sidebar__menu">
                    <SidebarSubmenu
                        id="dashboard"
                        title={<i className="ri-home-4-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                    >
                        <li className="title">Dashboard</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Add Device</a></li>
                    </SidebarSubmenu>

                    <SidebarSubmenu
                        id="components"
                        title={<i className="ri-airplay-fill"></i>}
                        activeSubmenu={activeSubmenu}
                        setActiveSubmenu={setActiveSubmenu}
                        >
                        <li className="title">Devices</li>
                        <li><a href="#">Alerts</a></li>
                        <li><a href="#">Existing Device</a></li>
                        <li><a href="#">Update Device</a></li>
                    </SidebarSubmenu>

                    <SidebarSubmenu
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
                    </SidebarSubmenu>

                    <li className="divider"></li>
                    <li>
                        <a href="#"><i className="ri-settings-5-fill"></i></a>
                    </li>
                    <li>
                        <a href="#" className="logout"><i className="ri-logout-box-line"></i></a>
                    </li>
                </ul>
            </section>

            {/* <!-- start: SIDEBAR OVERLAY --> */}
            <div className="sidebar-overlay"></div>
            {/* <!-- end: SIDEBAR OVERLAY --> */}

            {/* <!-- start: SIDEBAR MOBILE --> */}
            <section id="sidebar-mobile" onClick={toggleNavbar}>
                <i className="ri-menu-2-line toggle-sidebar"></i>
                <a href="#" className="brand">
                    <i className="ri-fire-line"></i>
                    Adminweb
                </a>
            </section>
            {/* <!-- end: SIDEBAR MOBILE --> */}
        </>
    );
}
