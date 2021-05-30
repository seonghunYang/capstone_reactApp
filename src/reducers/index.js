import produce from "immer";

const initialState= {
  observatory_data: null
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_OBSERV_DATA' : 
      state.observatory_data = action.payload;
      break;
    default:
      break;
  }
}, initialState);


export default reducer;