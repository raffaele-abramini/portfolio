import React, { Component } from "react";
import Section from "../containers/home-section-container";
import PageNav from "../containers/page-nav-container";
import Intro from "../components/home-intro";
import Portfolio from "../containers/portfolio-container";
import About from "../components/home-about";
import Skills from "../containers/skills-container";
import PostList from "../containers/post-list-container";
import data from "../data";
import Animate from "../lib/animate";

class Home extends Component {
  constructor(props) {
    super(props);
    const { intro, about, portfolio, skills, postList } = data.homeSections;

    this.sections = [
      {
        name: intro.name,
        component: <Intro/>,
      },
      {
        name: portfolio.name,
        component: <Portfolio/>,
      },
      {
        name: postList.name,
        component: <PostList/>,
        backgroundColor: postList.backgroundColor,
      },
      {
        name: about.name,
        component: <About/>,
      },
      {
        name: skills.name,
        component: <Skills/>,
        reduceOnMobile: true,
      },
    ];
  }

  componentDidMount() {
    new Animate();
  }

  render() {
    return (
      <div className="c-page c-homepage">
        <PageNav/>

        {this.renderSections()}
      </div>
    );
  }

  renderSections() {
    return this.sections.map(({ name, component, reduceOnMobile, backgroundColor }) => (
      <Section name={name}
               key={name}
               reduceOnMobile={reduceOnMobile}
               backgroundColor={backgroundColor}>
        {component}
      </Section>
    ));
  }
}

export default Home;