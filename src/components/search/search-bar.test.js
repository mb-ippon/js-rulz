/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { should } from 'chai';
import SearchBar from './search-bar';

should();

describe('SearchBar', () => {
  it('should define a placeholder', () => {
    const wrapper = shallow(<SearchBar />);
    wrapper // eslint-disable-line no-unused-expressions
    .find('input[type="text"]')
    .props()
    .placeholder
    .should.be.defined;
  });
  it('should define an user input callback on a change', () => {
    const onUserInput = sinon.spy();
    const wrapper = mount(<SearchBar onUserInput={onUserInput} filterText="test" inStockOnly />);
    wrapper.find('input[type="text"]').simulate('change');
    onUserInput.calledOnce.should.equal(true);
    onUserInput.calledWith('test', true).should.equal(true);
  });
});
