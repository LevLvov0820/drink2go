import React from 'react';

export default function FilterItem({
    className,
    name,
    children
}) {
    return (
        <div className={className ? `filter__item ${className}` : 'filter__item'}>
            {name ? <p className='filter__name'>{name}</p> : ''}
            {children}
        </div>
    )
}