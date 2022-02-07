import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about-page';
import Home from './pages/home-page';

interface IAppProps {}

const App: React.FC<IAppProps> = ({}:IAppProps) => {
    return (
        <BrowserRouter>
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;