import axios from 'axios';
import tideObsList from '../location/tideObsList.json';
import buObsList from '../location/buObsList.json';
import config from '../config/config.json';

const API_KEY = config.Observatory['API key'];
const Tide_Obs_URL = "http://www.khoa.go.kr/oceangrid/grid/api/tideObsRecent/search.do?"
const Bu_Obs_URL = "http://www.khoa.go.kr/oceangrid/grid/api/buObsRecent/search.do?"

export function getObservatoryData(latitude, longitude){
  var minTide = Number.MAX_SAFE_INTEGER;
  var minBu = Number.MAX_SAFE_INTEGER;
  var minTideObsCode = null;
  var minBuObsCode = null;

  tideObsList.positions.map((position) => {
    var calLat = (position.lat - latitude)**2;
    var calLng = (position.lng - longitude)**2;
    var sum = calLat + calLng;
    if(minTide > sum){
      minTide = sum;
      minTideObsCode = position.id;
    }
  });

  buObsList.positions.map((position) => {
    var calLat = (position.lat - latitude)**2;
    var calLng = (position.lng - longitude)**2;
    var sum = calLat + calLng;
    if(minBu > sum){
      minBu = sum;
      minBuObsCode = position.id;
    }
  });

  return (dispatch) => {

    axios.get(Tide_Obs_URL, {params: {
      ServiceKey: API_KEY,
      ObsCode: minTideObsCode,
      ResultType: "json"
    }}).then(({data}) => {
      dispatch({
        type: 'SET_TIDE_OBS_DATA', payload: data
      });
    }).catch((error) => {
      console.log('ERROR : ', error);
    });

    axios.get(Bu_Obs_URL, {params: {
      ServiceKey: API_KEY,
      ObsCode: minBuObsCode,
      ResultType: "json"
    }}).then(({data}) => {
      dispatch({
        type: 'SET_BU_OBS_DATA', payload: data
      });
    }).catch((error)=>{
      console.log('ERROR : ', error);
    });
  };
}
