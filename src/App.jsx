import React from 'react';
import PageWrapper from './components/layout/page-wrapper';
import navlinks from './mocks/navlinks';
import slides from './mocks/slides';
import features from './mocks/features';
import options from './mocks/options';
import products from './mocks/products';

function App() {
    return (
        <PageWrapper navlinks={navlinks} slides={slides} features={features} options={options} products={products}/>
    )
}

export default App;
