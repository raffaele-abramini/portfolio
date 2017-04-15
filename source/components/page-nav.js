import React, {Component} from 'react';
import data from '../data';
import classnames from 'classnames';

import SocialNav from './social-nav';

class PageNav extends Component {
    render(){
    	const navClasses = classnames({
			"c-page-nav" :  true,
			"is-open" : this.props.isNavOpen
		});

        return (
			<section className={navClasses}>
				<div className="c-page-nav__on-page">
					<button className="c-page-nav__toggle c-button--no-style"
							onClick={()=>this.handleToggleClick()}>
						toggle nav
					</button>
				</div>
				<aside className="c-page-nav__aside">
					<button className="c-page-nav__toggle-inner c-button--no-style"
							onClick={()=>this.handleToggleClick()}>
						X
					</button>

					<nav className="c-page-nav__nav">
						{this.renderItems()}
					</nav>

					<SocialNav />
				</aside>
			</section>
		)
    }

	renderItems(){
		return Object.values(data.homeSections).map(section => (
			<a className="c-page-nav__nav-item"
			   href={`#${section}`}
			   key={section}
			   onClick={()=>this.handleNavClick(section)}>
				{section}
			</a>
		));
	}

    handleNavClick(sectionName, e) {
		e && e.preventDefault();

		const closeNav = new Promise((resolve) =>{
			this.props.toggleNav(false);
			setTimeout(resolve, 300);
		});

		closeNav.then(this.props.switchSectionTo.bind(this, sectionName));

	}

	handleToggleClick(){
		this.props.toggleNav(!this.props.isNavOpen);
	}
}

export default PageNav