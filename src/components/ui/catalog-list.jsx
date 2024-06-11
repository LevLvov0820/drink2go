import React from 'react';
import Card from './card';

export default function CatalogList({ list }) {
    return (
        list ? 
        <ul className='catalog__list'>
            {list.map((item) => (
                <Card
                    className={'catalog__card'}
                    name={item.name}
                    description={item.description}
                    images={item.images}
                    price={item.price}
                    key={item.id}
                />
            ))}
        </ul>
        
        : null
    )
}