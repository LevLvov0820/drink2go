import React from 'react';
import Choice from './choice';

export default function FilterOptions({
    options,
    type,
    name,
    checked,
    onChange
 }) {
    return (
        <ul className='filter__options'>
            {options.map((option) => (
                <li className='filter__option' key={option.id}>
                    <Choice type={type} name={name} checked={type === 'radio' ? option.value === checked : checked.includes(option.value)} {...option} onChange={onChange} />
                </li>
            ))}
        </ul>
    )
}