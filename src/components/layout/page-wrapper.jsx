import React from 'react';
import Header from './header';

export default function PageWrapper({ navlinks }) {
    return (
        <>
            <Header navlinks={navlinks}/>
        </>
    )
}