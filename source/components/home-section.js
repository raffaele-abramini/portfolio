import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import scrollTo from '../lib/scroll';

class PageNav extends Component {

	componentWillUpdate(newProps){
		if(newProps.isActive)	{
			scrollTo(this.elem.offsetTop, 300)
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

    static propTypes = {
    	reduceOnMobile : PropTypes.bool
	}
}

export default PageNav