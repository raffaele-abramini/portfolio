import React, {Component} from 'react';
import Section from '../containers/home-section-container';
import PageNav from '../containers/page-nav-container';
import Intro from '../components/home-intro';
import Portfolio from '../containers/portfolio-container';
import About from '../components/home-about';
import Skills from '../containers/skills-container';
import data from '../data';
import Animate from '../lib/animate';

class Home extends Component {
	constructor(props) {
		super(props);
		const {intro, about, portfolio, skills} = data.homeSections;

		this.sections = [
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
		]
	}
	componentDidMount(){
		new Animate();
	}

    render(){
        return (
			<div className="c-page c-homepage">
				<PageNav />

				{this.renderSections()}
			</div>
		)
    }

    renderSections(){
    	return this.sections.map(({name, component})=> (
			<Section name={name} key={name}>
				{component}
			</Section>
		));
	}
}

export default Home