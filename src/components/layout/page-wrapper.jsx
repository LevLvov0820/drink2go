import React from 'react';
import Header from './header';
import MainPage from '../pages/main-page';

export default function PageWrapper({ navlinks, slides, features }) {
    return (
        <>
            <Header navlinks={navlinks} />
            <main className='page__main'>
                <MainPage slides={slides} features={features} />
            </main>
        </>
    )
}