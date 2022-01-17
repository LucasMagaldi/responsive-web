import React from 'react';
import './App.css';

import { Article, CTA, Brand, Feature, Navbar } from './Components';
import { Blog, FeaturesContainer, Possibility, Footer, Header } from './Containers';

const App = () => {
    return (
      <div className='App'> 
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <FeaturesContainer />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    )
}

export default App;