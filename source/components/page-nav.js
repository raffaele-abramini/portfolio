import React, {Component} from 'react';
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
						<svg className="c-icon">
							<use xlinkHref="#nav" />
						</svg>
					</button>

					{this.renderArrows()}
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

    renderArrows(){
    	const currentIndex = this.getCurrentSectionIndex();
    	const arrowClasses = (isPrev)=> classnames({
			'c-page-nav__arrow' : true,
			'c-button--no-style' : true,
			'c-page-nav__arrow-prev' : isPrev,
			'c-page-nav__arrow-next' : !isPrev,
			'is-disabled' : isPrev && currentIndex === 0
							|| !isPrev && currentIndex === (Object.values(this.props.homeSections).length -1)
		});


    	return (
			<div className="c-page-nav__arrows">
				<button className={arrowClasses(true)}
						onClick={()=>this.arrowClick(true)}>
					<svg className="c-icon">
						<use xlinkHref="#chevron-up" />
					</svg>
				</button>
				<button className={arrowClasses()}
						onClick={()=>this.arrowClick()}>
					<svg className="c-icon">
						<use xlinkHref="#chevron-down" />
					</svg>
				</button>
			</div>
		)
	}

	renderItems(){
		return Object.values(this.props.homeSections).map(section => (
			<a className="c-page-nav__nav-item"
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
			if(currentIndex + change >= Object.values(this.props.homeSections).length) return;
		}

		this.moveSectionTo(currentIndex+change);

	}

	getCurrentSectionIndex(){
		return Object.values(this.props.homeSections).indexOf(this.props.activeSection);
	}

	moveSectionTo(number){
		this.props.switchSectionTo(this.props.homeSections[Object.keys(this.props.homeSections)[number]]);
	}

}

export default PageNav