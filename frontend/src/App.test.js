import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Adapter from 'enzyme-adapter-react-16';
import enzyme, { mount } from 'enzyme';
import { Post } from './components/Post';

enzyme.configure({ adapter: new Adapter() });

describe('Post Component', () => {
    it('should test Post title', () => {
        const post = {
            id: 1,
            title: 'one',
            content: 'one1',
            author: 'one',
        };
        const wrapper = mount(<Post post={post} />);
        const h3 = wrapper.find('h3');
        expect(h3.text()).toBe(post.title);
    });
});
