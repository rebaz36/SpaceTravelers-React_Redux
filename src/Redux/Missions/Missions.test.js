import { joinMission } from './Missions';

describe('missionsReducer.js tests', () => {
  it('Expect ID of second mission to be 2', () => {
    expect(joinMission(2).payload).toBe(2);
  });

  it('Expect type of joinMission dispatch to be JOIN_MISSION', () => {
    expect(joinMission(2).type).toBe('JOIN_MISSION');
  });
});
