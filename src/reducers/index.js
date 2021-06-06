import produce from "immer";

const initialState= {
  tide_data: null,
  weather_data: null,
  marinAccidentPer: 0,
  pastAccidentPer: 0,
  location: null,
  html : null
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_MODEL_DATA' : 
      state.tide_data = action.payload.TIDE_OBS_DATA;
      // state.weather_data = action.payload.WEATHER_DATA;
      state.pastAccidentPer = state.marinAccidentPer;
      state.marinAccidentPer = action.payload.accidentData;
      break;
    case "CHANGE_LOCATION":
      state.location = action.payload
    default:
      break;
  }
}, initialState);


export default reducer;