import React from 'react';
import { mount, shallow } from 'enzyme';
import RulingsList from './RulingsList';
import Celebrity from './Celebrity';

jest.mock('./Celebrity', () => 'Celebrity');

const fetchSpy = jest.spyOn(window, 'fetch');
const stubList = [{ a: 1 }];
const rulingsPromise = Promise.resolve(stubList);
const stubResponse = Promise.resolve({ json: () => rulingsPromise });

fetchSpy.mockReturnValue(stubResponse);

describe('RulingsList', () => {
  test('Should load data from proper .json file', () => {
    mount(
      <RulingsList />,
    );
    expect(fetchSpy).toHaveBeenCalledWith('/data.json');
  });

  test('Should update state from fetch response', async () => {
    const wrapper = mount(
      <RulingsList />,
    );
    await rulingsPromise;
    await stubResponse;
    expect(wrapper.state().rulings).toBe(stubList);
  });

  test('Should update state on fetch fails', async () => {
    const stubFetchFail = Promise.reject();
    fetchSpy.mockReturnValueOnce(stubFetchFail);
    const wrapper = mount(
      <RulingsList />,
    );
    try {
      await stubFetchFail;
    } catch (ex) {
      expect(wrapper.state().isError).toBe(true);
    }
  });

  test('Should render proper Celebrity cards', () => {
    const wrapper = shallow(
      <RulingsList />,
    );
    wrapper.setState({
      rulings: [
        {
          id: 1,
          name: 'Kanye West',
          description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
          publishedDate: '2018-07-01',
          topic: 'Entertainment',
          imageUrl: '/images/kanye_west.jpg',
        },
      ],
    });
    wrapper.update();
    expect(wrapper.find(Celebrity).props()).toMatchSnapshot();
  });
});
