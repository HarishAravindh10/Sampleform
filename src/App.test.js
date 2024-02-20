import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('should render username and password input fields', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should update password state on input change', () => {
  //   const component = renderer.create(<App />);
  //   const instance = component.getInstance();

  //   instance.setState({ password: 'password' });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // Add more tests for other functionalities (optional)
});