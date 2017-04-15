import React from 'react';
import Section from '../containers/home-section-container';
import PageNav from '../containers/page-nav-container';
import Intro from '../components/home-intro';
import Portfolio from '../containers/portfolio-container';
import About from '../components/home-about';
import Skills from '../components/home-skills';
import data from '../data';

const HomePage = ({})=>{
	const {intro, about, portfolio, skills} = data.homeSections;
	const sections = [
		{
			name: intro,
			component: <Intro/>
		},
		{
			name: portfolio,
			component: <Portfolio/>
		},
		{
			name: about,
			component: <About/>
		},
		{
			name: skills,
			component: <Skills/>
		}
	];

	const renderSections = sections.map(({name, component})=> (
		<Section name={name} key={name}>
			{component}
		</Section>
	));

    return <div className="c-page c-homepage">
		<PageNav />

		{renderSections}
	</div>
};

export default HomePage;