import React from 'react';
import Section from '../components/home-section';
import Intro from '../components/home-intro';
import Portfolio from '../components/home-portfolio';
import About from '../components/home-about';
import Skills from '../components/home-skills';

const HomePage = ({})=>{
    return <div>
		<Section>
			<Intro/>
		</Section>
		<Section>
			<Portfolio/>
		</Section>
		<Section>
			<About/>
		</Section>
		<Section>
			<Skills/>
		</Section>
	</div>
};

export default HomePage;