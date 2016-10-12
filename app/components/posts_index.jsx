import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions_index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="button primary">
						Add a Post
					</Link>
				</div>
			List of blog posts
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);