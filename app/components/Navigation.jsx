var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">Redux / React Blog App</li>
					<li><IndexLink to="/" activeClassName="active-link">Posts</IndexLink></li>
					<li><Link to="/posts/new" activeClassName="active-link">Add a Post</Link></li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">Created by <a href="http://www.samilytics.com" target="_blank">Sami Bee</a></li>
				</ul>
			</div>
		</div>		
	);
};
	
export default Navigation;