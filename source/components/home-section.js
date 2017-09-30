import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import scrollTo from '../lib/scroll';
import throttle from 'lodash.throttle';

class PageNav extends Component {
	static propTypes = {
		reduceOnMobile : PropTypes.bool,
		name : PropTypes.string.isRequired,
		isActive: PropTypes.bool.isRequired,
		isScrollTriggered: PropTypes.bool.isRequired,
		backgroundColor: PropTypes.string
	};

	shouldComponentUpdate(nextProps) {
		return this.props.isActive !== nextProps.isActive
			|| this.props.isScrollTriggered !== nextProps.isScrollTriggered;
	}

	componentDidMount(){
		global.addEventListener('scroll', throttle(()=> this.activateOnScroll(), 100))
	}

	activateOnScroll(){
		const {pageYOffset, innerHeight} = global;
		if(!this.props.isScrollTriggered
			&& pageYOffset > this.elem.offsetTop - innerHeight/3 && pageYOffset < this.elem.offsetTop + this.elem.offsetHeight - innerHeight/3) {
			this.props.setActiveSection(this.props.name);
		}
	}

	componentWillUpdate(newProps){
		if(newProps.isActive && newProps.isScrollTriggered)	{
			scrollTo(this.elem.offsetTop, 300, this.props.unsetScrollTriggered)
		}
	}

    render(){
    	const {children, reduceOnMobile, backgroundColor} = this.props;
    	const classNames = classnames({
			'c-homepage-section': true,
			'c-homepage-section--reduce-on-mobile' : reduceOnMobile,
			'c-homepage-section--pale-green': backgroundColor === 'pale-green'
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