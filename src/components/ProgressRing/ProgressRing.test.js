import React from 'react';
import { shallow } from 'enzyme';
import ProgressRing from './ProgressRing';

describe('<ProgressRing />', () => {
	it('without props', () => {
		const wrapper = shallow(<ProgressRing />);

		expect(wrapper).toMatchSnapshot();
	});

	it('with a value', () => {
		const wrapper = shallow(<ProgressRing value={15} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('with a value and active', () => {
		const wrapper = shallow(<ProgressRing value={15} isActive />);

		expect(wrapper).toMatchSnapshot();
	});
});
