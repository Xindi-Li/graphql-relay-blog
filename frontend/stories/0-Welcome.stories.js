import React from 'react';
import { storiesOf } from '@storybook/react';
import { Post } from '../src/components/Post';

storiesOf('Post', module).add('with post one', () => (
    <Post
        post={{
            title: 'one',
            content: 'one',
            author: 'one',
        }}
    />
));
