import React from 'react/addons';
import { expect } from 'chai';

let { TestUtils } = React.addons;
let shallowRenderer = TestUtils.createRenderer();

describe(' component', () => {
  it('should be a component', () => {
    expect(true).to.equal(true);
  });
});
