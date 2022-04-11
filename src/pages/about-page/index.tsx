import React from 'react';

interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}:IAboutProps) => {
    console.log('stop');
    return (
        <div>About page</div>
    )
}

export default About;
