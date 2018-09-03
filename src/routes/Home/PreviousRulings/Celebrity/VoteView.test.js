import React from 'react';
import { shallow } from 'enzyme';
import VoteView from './VoteView';

jest.mock('./RatingButton', () => 'RatingButton');

describe('VoteView', () => {
  test('Should update state when option voteUp clicked', () => {
    const wrapper = shallow(
      <VoteView />,
    );
    const voteUp = wrapper.find({ 'data-test-class': 'vote-up' });
    voteUp.props().onClick();
    expect(wrapper.state().selectedOption).toBe('up');
  });

  test('Should update state when option voteDown clicked', () => {
    const wrapper = shallow(
      <VoteView />,
    );
    const voteDown = wrapper.find({ 'data-test-class': 'vote-down' });
    voteDown.props().onClick();
    expect(wrapper.state().selectedOption).toBe('down');
  });

  test('Should pass active param to voteUp button when is active', () => {
    const wrapper = shallow(
      <VoteView />,
    );
    wrapper.setState({
      selectedOption: 'up',
    });
    wrapper.update();
    const voteUp = wrapper.find({ 'data-test-class': 'vote-up' });
    expect(voteUp.props().active).toBe(true);
  });

  test('Should pass active param to voteDown button when is active', () => {
    const wrapper = shallow(
      <VoteView />,
    );
    wrapper.setState({
      selectedOption: 'down',
    });
    wrapper.update();
    const voteDown = wrapper.find({ 'data-test-class': 'vote-down' });
    expect(voteDown.props().active).toBe(true);
  });
});
