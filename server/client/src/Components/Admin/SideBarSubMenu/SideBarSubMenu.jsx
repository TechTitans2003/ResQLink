import React from 'react';

const SidebarSubmenu = ({ id, title, activeSubmenu, setActiveSubmenu, children }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setActiveSubmenu(activeSubmenu === id ? null : id);
    };

    return (
        <li>
            <a href="#" onClick={handleClick} className={activeSubmenu === id ? 'clicked' : ''}>
                {title}
            </a>
            <ul className={`sidebar__submenu ${activeSubmenu === id ? 'active' : ''}`}>
                {children}
            </ul>
        </li>
    );
};

export default SidebarSubmenu;
