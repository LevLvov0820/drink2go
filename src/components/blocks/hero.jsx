import React from 'react';
import Container from '../layout/container';
import Badge from '../ui/badge';
import Button from '../ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SlideButton from '../ui/slide-button';

export default function Hero({ slides }) {
    return (
        <section className='hero'>
            <h1 className='visually-hidden'>Новинки Drink2Go</h1>
            <Container className='hero__container'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    navigation={false}
                    loop
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <picture>
                                <source media='(min-width: 1440px)' type='image/webp' srcSet={`${slide.images.desktop[2]} 1x, ${slide.images.desktop[3]} 2x`} width='600' height='600' />
                                <source media='(min-width: 1440px)' srcSet={`${slide.images.desktop[0]} 1x, ${slide.images.desktop[1]} 2x`} width='600' height='600' />

                                <source media='(min-width: 768px)' type='image/webp' srcSet={`${slide.images.tablet[2]} 1x, ${slide.images.tablet[3]} 2x`} width='476' height='476' />
                                <source media='(min-width: 768px)' srcSet={`${slide.images.tablet[0]} 1x, ${slide.images.tablet[1]} 2x`} width='476' height='476' />

                                <source type='image/webp' srcSet={`${slide.images.mobile[2]} 1x, ${slide.images.mobile[3]} 2x`} width='280' height='280' />
                                <img className='swiper__image' src={slide.images.mobile[0]} srcSet={`${slide.images.mobile[1]} 2x`} width='280' height='280' alt={slide.title} />
                            </picture>
                            <div className='swiper__text'>
                                <Badge>Новинка!</Badge>
                                <h1 className='swiper__title'>{slide.title}</h1>
                                <p className='swiper__description'>{slide.description}</p>
                                <div className='swiper__order'>
                                    <div className='swiper__price'>
                                        <p>{`${slide.oldPrice}₽`}</p>
                                        <b>{`${slide.newPrice}₽`}</b>
                                    </div>
                                    <Button link={'/catalog'}>Заказать</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <SlideButton isNext={false} />
                    <SlideButton isNext={true} />
                </Swiper>
            </Container>
        </section>
    )
}