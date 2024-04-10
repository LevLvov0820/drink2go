import React from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideButton({ isNext }) {
    const swiper = useSwiper();

    return (
        <span className={`swiper__button ${isNext ? 'swiper__button--next' : 'swiper__button--prev'}`} onClick={() => isNext ? swiper.slideNext() : swiper.slidePrev()}></span>
    )
}