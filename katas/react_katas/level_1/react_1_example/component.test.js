import { Meteor } from 'meteor/meteor';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import React from 'react';
import DisplayPropComponent from './component';

configure({ adapter: new Adapter() });

if (Meteor.isServer) {
    describe('<DisplayPropComponent />', () => {
        it('renders without crashing', () => {
            shallow(<DisplayPropComponent propToDisplay="Test Prop" />);
        });

        it('renders the prop', () => {
            const wrapper = shallow(<DisplayPropComponent propToDisplay="Test Prop" />);
            expect(wrapper.text()).to.equal('Test Prop');
        });
    });
}