import React from 'react';
import desktopLogo from '../../assets/logo-desktop.svg';
import tabletLogo from '../../assets/logo-tablet.svg';
import mobileLogo from '../../assets/logo-mobile.svg';

export default function Logo({
    className,
    text
}) {
    return (
        <a className={className ? `${className} logo` : 'logo'} href="/">
            <picture>
                <source media="(min-width: 1440px)" srcSet={desktopLogo} width="170" height="36" />
                <source media="(min-width: 768px)" srcSet={tabletLogo} width="82" height="36" />
                <img src={mobileLogo} width="32" height="36" alt="Drink2Go Logo." />
            </picture>
            <span className='logo__text'>{text}</span>
        </a>
    )
}