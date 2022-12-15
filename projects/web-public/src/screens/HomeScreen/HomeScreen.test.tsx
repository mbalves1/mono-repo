import { customRender } from '@monorepo/test-commons/react-testing-library';
import { HomeScreen } from './HomeScreen';

function CustomWrapper({children}) {
  console.log('cutsom wrapper');
  return <section>{children}</section>
}
const render = customRender(CustomWrapper);

describe('<HomeScreen />', () => {
  it('renders the page', () => {
    const {container} = render(<HomeScreen />)

    expect(container).toMatchSnapshot();
  })
})
