import React from 'react';
import PageWrapper from './components/layout/page-wrapper';
import navlinks from './mocks/navlinks';
import slides from './mocks/slides';
import features from './mocks/features';
import options from './mocks/options';

function App() {
    return (
        <PageWrapper navlinks={navlinks} slides={slides} features={features} options={options}/>
    )
}

export default App;
