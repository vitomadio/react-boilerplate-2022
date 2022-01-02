import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld: React.FC = (): JSX.Element => {
	return <h1>Hello World</h1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
