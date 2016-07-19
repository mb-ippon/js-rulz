var React = require('react');
var enzyme = require('enzyme');
var sinon = require('sinon');
var SearchBar = require('./search-bar');
require('chai').should();

describe('SearchBar', function() {
  it('should define a placeholder', function() {
    var wrapper = enzyme.shallow(React.createElement(SearchBar));
    wrapper // eslint-disable-line no-unused-expressions
    .find('input[type="text"]')
    .props()
    .placeholder
    .should.be.defined;
  });
  it('should define an user input callback on a change', function() {
    var onUserInput = sinon.spy();
    var wrapper = enzyme.mount(React.createElement(SearchBar, {
      onUserInput: onUserInput,
      filterText: 'test',
      inStockOnly: true
    }));
    wrapper.find('input[type="text"]').simulate('change');
    onUserInput.calledOnce.should.equal(true);
    onUserInput.calledWith('test', true).should.equal(true);
  });
});
