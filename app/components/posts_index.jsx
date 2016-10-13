import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions_index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<div className="row">
					<Link to={"posts/" + post.id}>
						<div className="small-6 columns" key={post.id}>
							<strong>{post.title}</strong>
						</div>
						<div className="small-6 columns">
							{post.categories}
						</div>
					</Link>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<div>
					<Link to="/posts/new" className="button small">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				{this.renderPosts()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);