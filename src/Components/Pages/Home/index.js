import React, { Fragment } from 'react';
import HomePageStyles from './styles/HomePageStyles';

const HomePage = () => {
	const classes = HomePageStyles();
	return (
		<Fragment>
			<div id="frontend" className={classes.leftPad}>
				<h1>Frontend Templates and Mock Customer Data</h1>
				<p>
					This repo contains a mock API server, which will serve customers and HTML templates to your frontend
					app.
				</p>
				<h2 id="installation">Installation</h2>
				<p>To install the API server and its dependencies, run this command:</p>
				<p>
					<code>npm install</code>
				</p>
				<h2 id="start-the-server">Start the Server</h2>
				<p>To run the server, run this command:</p>
				<p>
					<code>npm run start-server</code>
				</p>
				<p>The output should display the URL of the running server (e.g. http//localhost:3000).</p>
				<h2 id="usage">Usage</h2>
				<p>
					Once the server is running, you can create, retrieve, update, and delete customers and HTML
					templates using the server&#39;s API endpoints. For example:
				</p>
				<p>
					Retrieve templates : <code>GET /api/templates</code>
				</p>
				<p>
					Retrieve a template by ID : <code>GET /api/templates/:id</code>
				</p>
				<p>
					Save a new template: <code>POST /api/templates</code>
				</p>
				<p>
					Update an existing template: <code>PUT /api/templates/:id</code>
				</p>
				<p>
					Retrieve customers : <code>GET /api/customers</code>
				</p>
				<p>
					Retrieve a customer by ID : <code>GET /api/customers/:id</code>
				</p>
				<p>
					Retrieve a customer by email : <code>GET /api/customers?email=:email</code>
				</p>
				<p>
					Filter users by partial email : <code>GET /api/customers?email_like=:partial_email</code>
				</p>
				<p>See the json-server documentation for a full usage guide.</p>
			</div>
			<div className={classes.leftPad}>
				<p>
					This project was bootstrapped with{' '}
					<a href="https://github.com/facebook/create-react-app">Create React App</a>.
				</p>
				<h2 id="available-scripts">Available Scripts</h2>
				<p>In the project directory, you can run:</p>
				<h3 id="-npm-start-">
					<code>npm start:dev</code>
				</h3>
				<p>
					Runs the app in the development mode.<br />
					Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.
				</p>
				<p>
					The page will reload if you make edits.<br />
					You will also see any lint errors in the console.
				</p>
				<h3 id="-npm-test-">
					<code>npm test</code>
				</h3>
				<p>
					Launches the test runner in the interactive watch mode.<br />
					See the section about{' '}
					<a href="https://facebook.github.io/create-react-app/docs/running-tests">running tests</a> for more
					information.
				</p>
				<h3 id="-npm-build-">
					<code>npm build</code>
				</h3>
				<p>
					Builds the app for production to the <code>build</code> folder.<br />
					It correctly bundles React in production mode and optimizes the build for the best performance.
				</p>
				<p>
					The build is minified and the filenames include the hashes.<br />
					Your app is ready to be deployed!
				</p>
				<p>
					See the section about{' '}
					<a href="https://facebook.github.io/create-react-app/docs/deployment">deployment</a> for more
					information.
				</p>
				<h3 id="-npm-eject-">
					<code>npm eject</code>
				</h3>
				<p>
					<strong>
						Note: this is a one-way operation. Once you <code>eject</code>, you can't go back!
					</strong>
				</p>
				<p>
					If you aren't satisfied with the build tool and configuration choices, you can <code>eject</code> at
					any time. This command will remove the single build dependency from your project.
				</p>
				<p>
					Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
					ESLint, etc) right into your project so you have full control over them. All of the commands except{' '}
					<code>eject</code> will still work, but they will point to the copied scripts so you can tweak them.
					At this point you're on your own.
				</p>
				<p>
					You don't have to ever use <code>eject</code>. The curated feature set is suitable for small and
					middle deployments, and you shouldn't feel obligated to use this feature. However we understand that
					this tool wouldn't be useful if you couldn't customize it when you are ready for it.
				</p>
				<h2 id="learn-more">Learn More</h2>
				<p>
					You can learn more in the{' '}
					<a href="https://facebook.github.io/create-react-app/docs/getting-started">
						Create React App documentation
					</a>.
				</p>
				<p>
					To learn React, check out the <a href="https://reactjs.org/">React documentation</a>.
				</p>
				<h3 id="code-splitting">Code Splitting</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/code-splitting">
						https://facebook.github.io/create-react-app/docs/code-splitting
					</a>
				</p>
				<h3 id="analyzing-the-bundle-size">Analyzing the Bundle Size</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size">
						https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
					</a>
				</p>
				<h3 id="making-a-progressive-web-app">Making a Progressive Web App</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app">
						https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
					</a>
				</p>
				<h3 id="advanced-configuration">Advanced Configuration</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/advanced-configuration">
						https://facebook.github.io/create-react-app/docs/advanced-configuration
					</a>
				</p>
				<h3 id="deployment">Deployment</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/deployment">
						https://facebook.github.io/create-react-app/docs/deployment
					</a>
				</p>
				<h3 id="-npm-build-fails-to-minify">
					<code>npm build</code> fails to minify
				</h3>
				<p>
					This section has moved here:{' '}
					<a href="https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify">
						https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
					</a>
				</p>
			</div>
		</Fragment>
	);
};

export default HomePage;
