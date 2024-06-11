import React from 'react';
import Button from './button';

export default function Card ({
    className,
    name,
    images,
    description,
    price,
}) {
    return (
        <li className={className ? `${className} card` : 'card'}>
            <picture>
                <source srcSet={`${images[2]} 1x, ${images[3]} 2x`} type='image/webp' />
                <img className='card__image' src={images[0]} srcSet={`${images[1]} 2x`} width='130' height='188' alt={name}/>
            </picture>
            <p className='card__name'>{name}</p>
            <span className='card__description'>{description}</span>
            <div className='card__bottom'>
                <span className='card__price'>{price}₽</span>
                <Button className={'card__button'}>В корзину</Button>
            </div>
        </li>
    )
}