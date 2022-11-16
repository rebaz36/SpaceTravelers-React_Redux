import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionTable from './MissionTable';
import store from '../redux/configureStore';

it('Render table element on screen', () => {
  render(
    <Provider store={store}>
      <MissionTable />
    </Provider>,
  );
  const missionListTable = document.querySelector('Table');
  expect(missionListTable).toBeTruthy();
});
