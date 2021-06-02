import produce from "immer";

const initialState= {
  tide_data: null,
  bu_data: null
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_TIDE_OBS_DATA' : 
      state.tide_data = action.payload;
      break;
    case 'SET_BU_OBS_DATA':
      state.bu_data = action.payload;
      break;
    default:
      break;
  }
}, initialState);


export default reducer;