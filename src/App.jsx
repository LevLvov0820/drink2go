import React from 'react';
import PageWrapper from './components/layout/page-wrapper';
import navlinks from './mocks/navlinks';
import slides from './mocks/slides'

function App() {
    return (
        <PageWrapper navlinks={navlinks} slides={slides} />
    )
}

export default App;
