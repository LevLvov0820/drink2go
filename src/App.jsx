import React from 'react';
import PageWrapper from './components/layout/page-wrapper';
import navlinks from './mocks/navlinks';

function App() {
    return (
        <PageWrapper navlinks={navlinks} />
    )
}

export default App;
