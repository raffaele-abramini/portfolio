import React, {Component} from 'react';
import PostList from '../components/home-post-list';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts-actions';

function mapStateToProps({posts}) {
	return {
		posts
	}
}


export default connect(mapStateToProps, { fetchPosts })(PostList);