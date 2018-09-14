import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
	it('default', () => {
		const wrapper = shallow(<Card />);

		wrapper.find('.card__action').simulate('click');

		expect(wrapper).toMatchSnapshot();
	});

	it('actions', () => {
		const wrapper = shallow(<Card />);

		// Clicking Start
		wrapper.find('.card__action').simulate('click');
		expect(wrapper.state('inProgress')).toBe(true);
		expect(wrapper.find('.card__action').text()).toEqual('Stop');

		// Clicking Stop
		wrapper.find('.card__action').simulate('click');
		expect(wrapper.state('inProgress')).toBe(false);
		expect(wrapper.find('.card__action').text()).toEqual('Start');
	});
});
