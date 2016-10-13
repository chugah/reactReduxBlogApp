import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from 'actions_index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	onSubmit (props) {
		this.props.createPost(props)
			.then(() => { 
				this.context.router.push('/');
			});
	}
	render() {
		const { fields: { title, categories, description },handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<div className="row">
					<div className="large-6 columns error">
						<label>Title
							<input type="text" {...title} />
						</label>
						<div className="text-help">
							{title.touched ? title.error : ''}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="large-6 columns">
						<label>Categories
							<input type="text" {...categories}/>
						</label>
						<div className="text-help">
							{categories.touched ? categories.error : ''}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="large-6 columns">
						<label>Description
							<textarea {...description}></textarea>
						</label>
						<div className="text-help">
							{description.touched ? description.error : ''}
						</div>
					</div>
				</div>
				<button type="submit" className="button primary">Submit</button>
				<Link to='/' className="button alert">Cancel</Link>
			</form>
		);
	}
}

function validate (values) {
	const errors = {};
	if (!values.title) {
		errors.title = 'A title is required';
	}
	if (!values.categories) {
		errors.categories = 'A category is required';
	}
	if (!values.description) {
		errors.description = 'A description is required';
	}
	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'description'],
	validate
}, null, { createPost })(PostsNew);

