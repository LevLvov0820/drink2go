import React from 'react';
import Container from '../layout/container';
import Badge from '../ui/badge';
import Filter from './filter';

export default function Catalog({ options }) {
    return (
        <section className='catalog'>
            <Container>
                <Badge>Каталог</Badge>
                <h2 className='catalog__title'>Каталог кофейных напитков</h2>
                <Filter options={options}/>
            </Container>
        </section>
    )
}