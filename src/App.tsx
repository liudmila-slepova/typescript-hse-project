import React from 'react';

import Layout from "./Layout/Layout";
import { Main }  from './components/Main';
import { Footer } from './components/footer';

//import './styles.css';

export const App = () => {
    return (
        <>
            <Layout />
            <Main />
            <Footer />
        </>
    );
};

export default App;
