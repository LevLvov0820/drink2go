import React from 'react';
import Hero from '../blocks/hero';
import Features from '../blocks/features';
import Catalog from '../blocks/catalog';

export default function MainPage({ slides, features, options }) {
    return (
        <>
            <Hero slides={slides} />
            <Features features={features} />
            <Catalog options={options}/>
        </>
    )
}