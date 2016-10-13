import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from 'main';
import PostsIndex from 'posts_index';
import PostsNew from 'posts_new';
import PostsShow from 'posts_show';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={PostsIndex}/>
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />				
	</Route>
);

