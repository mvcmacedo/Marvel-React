export const Types = {
  ADD_REQUEST: 'characters/ADD_REQUEST',
  ADD_SUCCESS: 'characters/ADD_SUCCESS',
  ADD_FAILURE: 'characters/ADD_FAILURE',
  REMOVE: 'characters/REMOVE',
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return { ...state, data: state.data.filter(user => user.id !== action.payload.user.id) };
    default:
      return state;
  }
}

export const Creators = {
  addCharacterRequest: character => ({
    type: Types.ADD_REQUEST,
    payload: { character },
  }),

  addCharacterSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addCharacterFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  removeCharacter: character => ({
    type: Types.REMOVE,
    payload: { character },
  }),
};
