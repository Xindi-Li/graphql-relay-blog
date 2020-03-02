import React from 'react'
import { Link } from 'react-router-dom';
import { createFragmentContainer, createPaginationContainer, graphql } from 'react-relay';
import Post from './Post';

const styles = {
    listPageWrapper: { marginTop: 20, textAlign: 'center' },
    postButtonWrapper: {
        padding: 10,
        background: 'white',
        border: '2px solid indianred',
        color: 'indianred',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonWrapper: {
        padding: 10,
        background: 'white',
        border: '2px solid indianred',
        color: 'indianred',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        textDecoration: 'underline',
        cursor: 'pointer'
    }
};

class ListPage extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {
        const user = localStorage.getItem('User');
        if (user) {
            this.setState({ user: JSON.parse(user) });
        }
    }

    _loadMore() {
        if (!this.props.relay.hasMore()) {
            console.log('Nothing more to load');
            return;
        } else if (this.props.relay.isLoading()) {
            console.log('Request loading');
            return;
        }

        this.props.relay.loadMore(1);
    }

    render() {
        return (
            <div style={styles.listPageWrapper}>
                <Link style={styles.postButtonWrapper} to="/create-post">
                    + New Post
                </Link>
                {!this.state.user && (
                    <Link style={styles.buttonWrapper} to="/login">
                        Login
                    </Link>
                )}
                {this.state.user && (
                    <a
                        onClick={() => {
                            localStorage.removeItem('User');
                            window.location.reload();
                        }}
                        style={styles.buttonWrapper}
                    >
                        Logout
                    </a>
                )}
                <div style={{ marginTop: 20 }}>
                    {this.props.viewer.allPosts.edges.map(({ node }) => {
                        return <Post key={node.__id} post={node} />;
                    })}
                </div>

                <button style={styles.buttonWrapper} onClick={() => this._loadMore()}>
                    Load More
                </button>
            </div>
        );
    }
}

export default createPaginationContainer(
    ListPage,
    {
        viewer: graphql`
        fragment ListPage_viewer on Viewer {
            allPosts(first: $count, after:$after, order:"DESC")
                @connection(key: "ListPage_allPosts", filters: []){
                    edges{
                        node{
                            ...Post_post
                        }
                    }
                    pageInfo{
                        hasNextPage
                        endCursor
                    }
                }
        }
        `
    },
    {
        direction: 'forward',
        query: graphql`
            query ListPageForwardQuery($count: Int!, $after: String){
                viewer{
                    ...ListPage_viewer
                }
            }
        `,
        getConnectionFromProps(props) {
            return props.viewer && props.viewer.allPosts;
        },
        getFragmentVariables(prevVars, totalCount) {
            return {
                ...prevVars,
                count: totalCount,
            };
        },
        getVariables(props, { count, cursor }, fragmentVariables) {
            return {
                count: count,
                after: cursor,
            };
        }
    }
);