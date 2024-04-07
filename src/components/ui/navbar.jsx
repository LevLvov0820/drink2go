import React from 'react';

export default function Navbar({ navlinks }) {
    const isActive = (link) => link === window.location.pathname; 

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                {navlinks.map((navlink) => (
                    <li className={`${isActive(navlink.link) ? 'navbar__item navbar__item--active' : 'navbar__item'}`} key={navlink.id}>
                        <a className='navbar__link' href={navlink.link}>{navlink.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}