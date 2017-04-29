import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import scrollTo from '../lib/scroll';
import throttle from 'lodash.throttle';

const almost = (num, substract) => {
	return  substract ? num - num/10 : num + num/10;
};


class PageNav extends Component {
	static propTypes = {
		reduceOnMobile : PropTypes.bool,
		name : PropTypes.string.isRequired,
		isActive: PropTypes.bool.isRequired,
		isScrollTriggered: PropTypes.bool.isRequired
	};

	shouldComponentUpdate(nextProps) {
		return this.props.isActive !== nextProps.isActive;
	}

	componentDidMount(){
		global.addEventListener('scroll', throttle(()=> this.activateOnScroll(), 100))
	}

	activateOnScroll(){
		const {pageYOffset, innerHeight} = global;
		if(!this.props.isScrollTriggered
			&& pageYOffset <= almost(this.elem.offsetTop) && pageYOffset + innerHeight >= almost(this.elem.offsetTop)){
			this.props.setActiveSection(this.props.name);
		}
	}

	componentWillUpdate(newProps){
		if(newProps.isActive && newProps.isScrollTriggered)	{
			scrollTo(this.elem.offsetTop, 300, this.props.unsetScrollTriggered)
		}
	}

    render(){
    	const {children, reduceOnMobile} = this.props;
    	const classNames = classnames({
			'c-homepage-section': true,
			'c-homepage-section--reduce-on-mobile' : reduceOnMobile
		});

        return (
			<section ref={elem => this.elem = elem}
					 className={classNames}
					 data-js-animate-on-view>
				{children}
			</section>
		)
    }
}

export default PageNav