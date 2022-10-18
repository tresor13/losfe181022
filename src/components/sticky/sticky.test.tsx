import renderer from 'react-test-renderer';
import Sticky from './index';

it('Sticky should render correct', () => {
  const component = renderer.create(<Sticky image="test" position="top"/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('Props should be correct', () => {
  const component = renderer.create(<Sticky position="top" image="test"/>);
  expect(component.root.props?.image).toEqual('test');
  expect(component.root.props?.position).toEqual('top');
});
