import produce from "immer";

const initialState= {
  tide_data: {},
  weather_data: null,
  marinAccidentPer: {prediction_ratio : 0},
  pastAccidentPer: {prediction_ratio : 0},
  location: "ㅡㅡㅡ ㅡㅡㅡ ㅡㅡㅡ",
  html : null
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_MODEL_DATA' : 
      state.tide_data = action.payload1;
      // state.weather_data = action.payload.WEATHER_DATA;
      state.pastAccidentPer = state.marinAccidentPer;
      state.marinAccidentPer = action.payload2;
      break;
    case "CHANGE_LOCATION":
      state.location = action.payload;
      break;
    default:
      break;
  }
}, initialState);


export default reducer;