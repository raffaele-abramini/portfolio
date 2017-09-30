import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostList extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderCategories(categories) {
		return categories.map((cat, index) => (
			<li key={index}>{cat}</li>
		))
	}

	renderPosts() {
		return this.props.posts.map((post, index) => (
			<article key={index}>
				<a href={post.link[0]}>
					<h3>{post.title[0]}</h3>
					<div>{post.pubDate[0]}</div>
					<ul>{this.renderCategories(post.category)}</ul>
				</a>
			</article>
		))
	}

    render(){
        return (
            <div>
				My latest posts

				<hr/>

				{this.renderPosts()}
			</div>
        )
    }

    static propTypes = {
    	fetchPosts: PropTypes.func.isRequired
	};

	static defaultProps = {
		posts: []
	}
}

export default PostList