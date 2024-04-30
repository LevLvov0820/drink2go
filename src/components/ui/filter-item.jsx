import React from 'react';

export default function FilterItem({
    name,
    children
}) {
    return (
        <div className='filter__item'>
            {name ? <p className='filter__name'>{name}</p> : ''}
            {children}
        </div>
    )
}