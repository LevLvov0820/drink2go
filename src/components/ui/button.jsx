import React from 'react';

export default function Button({
    className,
    link,
    type,
    onClick,
    children
}) {
    return (
        link ? 
        <a className={className ? `${className} button` : 'button'} href={link} onClick={onClick}>{children}</a>
        :
        <button className={className ? `${className} button` : 'button'} type={type} onClick={onClick}>{children}</button>
    )
}