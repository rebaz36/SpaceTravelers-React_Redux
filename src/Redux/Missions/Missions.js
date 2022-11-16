const JOIN_MISSION = 'JOIN_MISSION';
const UPDATE = 'UPDATE';

// Reducer section
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE:
      return action.data;
    case JOIN_MISSION:
      return state.map((e) => {
        if (e.mission_id === action.payload) {
          return { ...e, reserved: !e.reserved };
        }
        return e;
      });
    default:
      return state;
  }
};

export default missionsReducer;

// Action Creators
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const showMissions = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  dispatch({
    type: UPDATE,
    data,
  });
};
