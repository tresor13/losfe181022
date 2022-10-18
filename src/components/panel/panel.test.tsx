import renderer from 'react-test-renderer';
import Panel from './index';

it('Panel should render', () => {
  const component = renderer.create(<Panel image="test"/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('Image prop should be correct', () => {
  const component = renderer.create(<Panel image="test"/>);
  expect(component.root.props?.image).toEqual('test');
});
