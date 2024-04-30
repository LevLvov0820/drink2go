import React from 'react';

export default function Choice({
    type,
    name,
    value,
    disabled,
    checked,
    onChange
}) {
    return (
        <label className='choice'>
            <input className='choice__input' type={type} name={name} value={value} disabled={disabled} checked={checked} onChange={onChange} />
            <span className={`choice__${type}`} />
            <span className='choice__name'>{value}</span>
        </label>
    )
}