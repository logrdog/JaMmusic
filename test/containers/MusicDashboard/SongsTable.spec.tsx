import React from 'react';
import { shallow } from 'enzyme';
import SongsTable from '../../../src/containers/MusicDashboard/SongsTable';

describe('SongsTable', () => {
  it('is defined', () => {
    expect(SongsTable).toBeDefined();
  });
  it('renders correctly', () => {
    const wrapper = shallow(<SongsTable token="token" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('does not make the table if there are no songs', () => {
    const wrapper = shallow(<SongsTable token="token" sData={[]} />);
    expect(wrapper.find('div').get(0)).toBeDefined();
  });
});
