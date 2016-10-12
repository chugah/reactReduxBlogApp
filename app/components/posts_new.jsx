import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content },handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<h3>Create a New Post</h3>
				<div className="row">
					<div className="large-6 columns">
						<label>Title
							<input type="text" placeholder="Enter title" {...title} />
						</label>
					</div>
				</div>
				<div className="row">
					<div className="large-6 columns">
						<label>Categories
							<input type="text" placeholder="Enter category" {...categories}/>
						</label>
					</div>
				</div>
				<div className="row">
					<div className="large-6 columns">
						<label>Content
							<textarea placeholder="Enter description" {...content}></textarea>
						</label>
					</div>
				</div>
				<button type="submit" className="button primary">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
})(PostsNew);

