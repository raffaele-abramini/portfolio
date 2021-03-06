import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isClient } from 'utilities';

class PostList extends PureComponent {
	componentWillMount() {
		// Fetch posts only on client side
		if(isClient()) this.props.fetchPosts();
	}

	renderCategories(categories) {
		return categories.map((cat, index) => (
			<li key={index}
				className="c-post__category">{cat}</li>
		))
	}

	renderPosts() {
		return this.props.posts.map((post, index) => (
			<article key={index}
					 className="c-post-list__article c-post o-animate-in-view o-animate-in-view--slide">
				<a className="c-post__link"
				   href={post.link[0]}
				   target="_blank">
					<h3 className="c-post__title">{post.title[0]}</h3>
					<p className="c-post__date">{post.pubDate[0]}</p>
					<ul className="c-post__categories">
						{this.renderCategories(post.category)}
					</ul>
				</a>
			</article>
		))
	}

    render(){
        return (
            <div className="c-post-list" data-js-animate-in-view>
				<h2 className="c-post-list__title o-animate-in-view">
					My latest posts
				</h2>

				<div className="c-post-list__articles">
					{this.renderPosts()}
				</div>

				<a className="c-post-list__see-all-link o-animate-in-view o-animate-in-view--slide"
					href="https://medium.com/@oldirony"
					target="_blank">
					See all posts on Medium
				</a>
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