import React from 'react';
import { Link } from 'react-router-dom';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}:IHomeProps) => {
    return (
        <>
            <div>Home page</div>
            <Link to="about">About</Link>
        </>
    )
}

export default Home;