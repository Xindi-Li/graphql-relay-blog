import React, { useState } from 'react';
import Modal from 'react-modal';
import { createFragmentContainer, graphql } from 'react-relay';

const styles = {
    postWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        margin: 10,
        cursor: 'pointer',
    },
    closeButton: {
        position: 'absolute',
        right: 12,
        top: 10,
        border: 0,
        background: 'white',
        fontSize: 25,
        color: 'gray',
    },
};

const Post = props => {
    const [state, setState] = useState({ isOpen: false });
    return (
        <div
            style={styles.postWrapper}
            onClick={() => setState({ isOpen: !state.isOpen })}>
            <h3>{props.post.title}</h3>
            <Modal isOpen={state.isOpen} ariaHideApp={false}>
                {props.post.author && (
                    <div>By: {props.post.author.fullname}</div>
                )
                }
                <h3>{props.post.title}</h3>
                <div>{props.post.content}</div>
                <button
                    onClick={() => setState({ isOpen: false })}
                    style={styles.closeButton}>
                    X
                </button>
            </Modal>
        </div>
    );
}

export default createFragmentContainer(
    Post,
    {
        post: graphql`
            fragment Post_post on Post {
                id
                title
                content
                author{
                    fullname
                }
            }
        `
    }
);