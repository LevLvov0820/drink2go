import React from 'react';
import Hero from '../blocks/hero';
import Features from '../blocks/features';

export default function MainPage({ slides, features }) {
    return (
        <>
            <Hero slides={slides} />
            <Features features={features} />
        </>
    )
}