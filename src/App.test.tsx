import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import App from './App';

afterAll(() => {
  cleanup();
  jest.useRealTimers();
});

beforeAll(() => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval');
})

it('App should render', () => {
  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('SetInterval should be called', () => {
  renderer.create(<App/>);
  jest.runAllTimers();
  expect(setInterval).toHaveBeenCalledTimes(1);
});
