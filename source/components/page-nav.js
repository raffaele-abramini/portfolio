import React, { PureComponent } from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';

import SocialNav from './social-nav';
import FloatingTitle from './floating-title';

class PageNav extends PureComponent {

	static propTypes = {
		isNavOpen: PropTypes.bool.isRequired,
		activeSection: PropTypes.string.isRequired,
		homeSections: PropTypes.array.isRequired,
		switchSectionTo: PropTypes.func.isRequired,
		toggleNav: PropTypes.func.isRequired
	};

    render(){
    	const navClasses = classnames({
			"c-page-nav" :  true,
			"is-open" : this.props.isNavOpen
		});

        return (
			<section className={navClasses}>
				<div className="c-page-nav__on-page">
					<FloatingTitle activeSection={this.props.activeSection} />

					<button className="c-page-nav__toggle c-button--no-style o-animate-on-load o-animate-on-load--3"
									aria-label="Toggle side navigation"
							onClick={()=>this.handleToggleClick()}>
						<svg className="c-icon" aria-hidden>
							<use xlinkHref="#nav" />
						</svg>
					</button>

					{this.renderArrows()}
				</div>
				<aside className="c-page-nav__aside">
					<button className="c-page-nav__toggle-inner c-button--no-style"
							onClick={()=>this.handleToggleClick()}>
						<span aria-hidden>X</span>
					</button>

					<nav className="c-page-nav__nav">
						{this.renderItems()}
					</nav>

					<SocialNav extraClasses="c-page-nav__social-nav" />
				</aside>
			</section>
		)
    }

    renderArrows(){
    	const currentIndex = this.getCurrentSectionIndex();
    	const arrowClasses = (isPrev)=> classnames({
			'c-page-nav__arrow' : true,
			'c-button--no-style' : true,
			'c-page-nav__arrow-prev' : isPrev,
			'c-page-nav__arrow-next' : !isPrev,
			'o-animate-on-load' : true,
			'o-animate-on-load--4' : isPrev,
			'o-animate-on-load--5' : !isPrev,
			'is-disabled' : isPrev && currentIndex === 0
							|| !isPrev && currentIndex === this.props.homeSections.length -1
		});


    	return (
			<div className="c-page-nav__arrows">
				<button className={arrowClasses(true)}
						onClick={()=>this.arrowClick(true)}
					aria-label="Move to previous section">
					<svg className="c-icon" aria-hidden>
						<use xlinkHref="#chevron-up" />
					</svg>
				</button>
				<button className={arrowClasses()}
						onClick={()=>this.arrowClick()}
								aria-label="Move to previous section">
					<svg className="c-icon" aria-hidden>
						<use xlinkHref="#chevron-down" />
					</svg>
				</button>
			</div>
		)
	}

	renderItems(){
		return this.props.homeSections.map(section => (
			<a className="c-page-nav__nav-item o-animate-on-open"
			   href={`#${section}`}
			   key={section}
			   onClick={event=>this.handleNavClick(section, event)}>
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

	arrowClick(isPrev){
		const currentIndex = this.getCurrentSectionIndex();
		let change = 0;

		if(isPrev) {
			change--;
			if(currentIndex + change < 0) return;
		} else {
			change++;
			if(currentIndex + change >= Object.keys(this.props.homeSections).length) return;
		}

		this.moveSectionTo(currentIndex+change);

	}

	getCurrentSectionIndex(){
		return this.props.homeSections.indexOf(this.props.activeSection);
	}

	moveSectionTo(number){
		this.props.switchSectionTo(this.props.homeSections[Object.keys(this.props.homeSections)[number]]);
	}

}

export default PageNav