import axios from 'axios';
import location from '../location/data.json';
import config from '../config/config.json';

const API_KEY = config.Observatory['API key'];
const Observatory_URL = "http://www.khoa.go.kr/oceangrid/grid/api/tideObsRecent/search.do?"

export function getObservatoryData(latitude, longitude){
  var min = Number.MAX_SAFE_INTEGER;
  var minObsCode = null;

  location.positions.map((position) => {
    var calLat = (position.lat - latitude)**2;
    var calLng = (position.lng - longitude)**2;
    var sum = calLat + calLng;
    if(min > sum){
      min = sum;
      minObsCode = position.id;
    }
  });

  return (dispatch) => {
    axios.get(Observatory_URL, {params: {
      ServiceKey: API_KEY,
      ObsCode: minObsCode,
      ResultType: "json"
    }}).then(({data}) => {
      dispatch({
        type: 'SET_OBSERV_DATA', payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response
      });
    });
  };
}
