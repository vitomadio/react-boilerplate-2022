import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface IAppProps {}

const Home = lazy(() => import('./pages/home-page'));
const About = lazy(() => import('./pages/about-page'));

const App: React.FC<IAppProps> = ({}: IAppProps) => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
