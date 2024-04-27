import React from 'react';
import Container from '../layout/container';
import Badge from '../ui/badge';

export default function Features({ features }) {
    return (
        <section className='features'>
            <Container>
                <Badge>Преимущества</Badge>
                <h2 className='features__title'>Главные причины выбрать Drink2Go</h2>
                <ul className='features__list'>
                    {features.map((feature, index) => (
                        <li className={`features__item features__item--${feature.id}`} key={index}>
                            <div className="features__text">
                                <p className='features__name'>{feature.title}</p>
                                <p className='features__description'>{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}