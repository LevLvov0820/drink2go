import React from 'react';

export default function Button({
    className,
    link,
    type,
    children
}) {
    return (
        link ? 
        <a className={className ? `${className} button` : 'button'} href={link}>{children}</a>
        :
        <button className={className ? `${className} button` : 'button'} type={type}>{children}</button>
    )
}