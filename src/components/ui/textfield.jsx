import React from 'react';

export default function Textfield({
    type,
    name,
    min,
    max,
    value,
    onChange
}) {
    return (
        <label className='textfield'>
            <input className='textfield__input' type={type} name={name} min={min} max={max} value={value} onChange={onChange}></input>
        </label>
    )
}