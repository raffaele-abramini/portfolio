import React, {Component} from 'react';
import data from '../data';

class PageNav extends Component {
    render(){
        return <section className="c-page-nav">
			<label>page nav </label>

			{this.renderItems()}
		</section>
    }

	renderItems(){
		return Object.values(data.homeSections).map(section => (
			<button key={section} onClick={()=>this.handleNavClick(section)}>
				{section}
			</button>
		));
	}

    handleNavClick(sectionName) {
		this.props.switchSectionTo(sectionName);
	}
}

export default PageNav