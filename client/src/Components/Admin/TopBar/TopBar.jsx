import './TopBar.css';

export default function TopBar() {
    return (
        <>

            {/* <!-- start: MAIN TOP --> */}
            <div className="main__top">
                <div className="main__top__title">
                    <h3>Dashboard</h3>
                    <ul className="breadcrumbs">
                        <li><a href="#">Home</a></li>
                        <li className="divider">/</li>
                        <li><a href="#" className="active">Dashboard</a></li>
                    </ul>
                </div>
                <ul className="main__top__menu">
                    <li className="search">
                        <a href="#">
                            <i className="ri-search-2-line"></i>
                        </a>
                        <div className="main__dropdown">
                            <form action="#">
                                <input type="text" name="" placeholder="Search" />
                            </form>
                            <span>Recent Search</span>
                            <ul className="recent-search">
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h5>Keyword</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="notification">
                        <a href="#">
                            <i className="ri-notification-2-line"></i>
                        </a>
                        <div className="main__dropdown">
                            <div className="notification__top">
                                <h4>Notifications</h4>
                                <span>6</span>
                            </div>
                            <ul className="notification__item">
                                <li>
                                    <a href="#">
                                        <div className="left">
                                            <h5>Notification title</h5>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                        </div>
                                        <span>3 hours</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="left">
                                            <h5>Notification title</h5>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                        </div>
                                        <span>3 hours</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="left">
                                            <h5>Notification title</h5>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                        </div>
                                        <span>3 hours</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="left">
                                            <h5>Notification title</h5>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                        </div>
                                        <span>3 hours</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="left">
                                            <h5>Notification title</h5>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                        </div>
                                        <span>3 hours</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="inbox">
                        <a href="#">
                            <i className="ri-message-3-line"></i>
                        </a>
                        <span></span>
                    </li>
                    <li className="profile">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </a>
                        <div className="main__dropdown">
                            <div className="profile__top">
                                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div className="name">
                                        <h5>John Doe</h5>
                                        <p>Web Developer</p>
                                    </div>
                            </div>
                            <ul className="profile__menu">
                                <li><a href="#"><i className="ph-user-circle-fill"></i> Edit profile</a></li>
                                <li><a href="#"><i className="ph-gear-fill"></i> Settings</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <!-- end: MAIN TOP --> */}

        </>
    )
}
