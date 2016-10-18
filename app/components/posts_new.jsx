import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from 'actions_index';
import { Link } from 'react-router';

const FIELDS = {
	title: {  
		type: 'input',
		label: 'Title for Post'
	},
	categories: { 
		type: 'input',
		label: 'Enter a category'
	},
	content: { 
		type: 'textarea',
		label: 'Post Contents'
	}
};

//['title', 'categories', 'content'];

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

	renderField(fieldConfig, field) {
		const fieldHelper = this.props.fields[field];

		return (
		<div className="row">
				<div className="large-6 columns error">
					<label>{fieldConfig.label}
						<fieldConfig.type type="text" {...fieldHelper} />
					</label>
					<div className="text-help">
						{fieldHelper.touched ? fieldHelper.error : ''}
					</div>
				</div>
			</div>
		);

	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(props => this.onSubmit(props))}>
				<h3>Create a New Post</h3>
				{_.map(FIELDS, this.renderField.bind(this))}
				<button type="submit" className="button primary">Submit</button>
				<Link to='/' className="button alert">Cancel</Link>
			</form>
		);
	}
}

function validate (values) {
	const errors = {};

	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Enter a ${field}`
		}

	});
	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: _.keys(FIELDS),
	validate
}, null, { createPost })(PostsNew);

