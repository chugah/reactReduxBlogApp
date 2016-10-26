import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {initialize} from 'redux-form';
import { fetchPost, updatePost } from 'actions_index';
import { Link } from 'react-router';
import PostsShow from 'posts_show';

class PostsEdit extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
		this.setState({
			post: this.props.post
		});
	}
	handleFormSubmit(formProps){
		this.props.updatePost(this.props.params.id, formProps);
	}
    render(){
      const {handleSubmit,fields:{ title, categories, content }} = this.props;
        if (!this.props.edit){
        	return <div>Retrieving Post</div>;
        }
        return (
            <div>
	          <div className="row">
	          	<div className="col-md-12">
	                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	                <fieldset className="form-group">
	                  <label>Title:</label>
	                  <input {...title} className="form-control" />
	                  {title.touched && title.error && <div className="text-danger">{title.error}</div>}
	                </fieldset>
	                <fieldset className="form-group">
	                  <label>Description:</label>
	                  <textarea {...content} className="form-control" ></textarea>
	                  {content.touched && content.error && <div className="text-danger">{content.error}</div>}
	                </fieldset>
	                <button className="btn btn-success">Update</button>
	                </form>
	         	</div>
	          </div>
           	</div>
        );
    }

}

function mapStateToProps(state) {
    return {
        edit: state.posts.updatePost,
        initialValues: state.posts
    }
}
export default reduxForm({
form:'edit',
fields:['title','categories', 'content'],
}, mapStateToProps,{ fetchPost, updatePost })(PostsEdit);
