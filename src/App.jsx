import React from 'react';
import PageWrapper from './components/layout/page-wrapper';
import navlinks from './mocks/navlinks';
import slides from './mocks/slides';
import features from './mocks/features';

function App() {
    return (
        <PageWrapper navlinks={navlinks} slides={slides} features={features} />
    )
}

export default App;
