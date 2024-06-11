import React from 'react';

export default function Select ({
    className,
    handleSelectChange
}) {
    return (
        <div className={className ? `${className} select` : 'select'}>
            <span>Сортировка:</span>
            <select defaultValue={'default'} onChange={(evt) => handleSelectChange(evt)}>
                <option value='default'>по умолчанию</option>
                <option value='ascending'>по возрастанию</option>
                <option value='descending'>по убыванию</option>
            </select>
        </div>
    )
}