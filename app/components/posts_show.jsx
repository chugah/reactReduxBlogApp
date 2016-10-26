import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from 'actions_index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
		this.setState({
			post: this.props.post
		});
	}
	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
			.then(() => {
				this.context.router.push('/');
			});
	}
	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<div>
					<Link to="/">Back to ALL posts</Link>
				</div>
				<div>
					<button 
						className="button alert"
						onClick={this.onDeleteClick.bind(this)}>
						Delete Post
					</button>
				</div>
			    <div>
			        <Link
			        	className="button primary"
			        	to={"/" + post.id + "/edit"}>
			        	Edit Post
			        </Link>
			    </div>
			    <div className="showbox">
			        <h3>{this.props.post.title}</h3>
			        <h6>{this.props.post.categories}</h6>
			        <p>{this.props.post.content}</p>
		    	</div>
			</div>
    	);
	}
}
function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);