import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import Card from './Card';
import {shallow, mount, render} from 'enzyme';


it('test card', ()=>{
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
})

