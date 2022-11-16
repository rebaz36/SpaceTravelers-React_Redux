import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from './Rockets';
import store from '../redux/configureStore';

it('Render table element on screen', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  const missionListTable = document.querySelector('#rockets');
  expect(missionListTable).toBeTruthy();
});
