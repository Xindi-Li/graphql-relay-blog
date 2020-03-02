import React from 'react';
import './App.css';
import ListPage from './components/ListPage';

import { QueryRenderer, graphql } from 'react-relay';
import environment from './Environment';

const appAllPostQuery = graphql`
  query AppAllPostQuery($count: Int!, $after: String){
    viewer{
      ...ListPage_viewer
    }
  }
`;

function App() {
	return (
		<QueryRenderer
			environment={environment}
			query={appAllPostQuery}
			variables={{
				count: 1
			}}
			render={
				({ error, props }) => {
					if (error) {
						return <div>{error.message}</div>
					}else if(props){
						return <ListPage viewer={props.viewer}/>
					}else{
						return <div>Loading</div>
					}
				}
			}
		/>
	);
}

export default App;
