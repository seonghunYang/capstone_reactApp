import { useEffect, useLayoutEffect, useState } from "react";
import locations from '../location/tideObsList.json';
import { useDispatch, useSelector } from 'react-redux';
import { getObservatoryData } from '../actions';
import { Box, useMediaQuery, IconButton, Stack, HStack } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons';



export default function Map() {
  const { kakao } = window;
  const dispatch = useDispatch();
  const tide_data = useSelector((state) => state.tide_data);
  const [marker, setMarker] = useState(0);
  const [map, setMap] = useState(null);
  const [info, setInfo] = useState(null);
  const marinAccidentPer = useSelector(state => state.marinAccidentPer);

  useEffect(() => {
    var container = document.getElementById('map');
    var options = { 
      center: new kakao.maps.LatLng(36.47914, 126.93519),
      level: 14
    };

    var map = new kakao.maps.Map(container, options);

    locations.positions.map((location) => {
      var markerPosition = new kakao.maps.LatLng(location.lat, location.lng);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true
      });
      marker.setMap(map);

      kakao.maps.event.addListener(marker, 'click', function() {
        dispatch(getObservatoryData(location.lat, location.lng));
        const pos = marker.getPosition();
        map.panTo(pos);
        setMarker(marker);
      });

    });
    
    setMap(map);
  }, []);

  useEffect(() => {
    if(info){
      info.close();
    }
    if(tide_data) {
      var iwContent = ` 
          <div style="padding:5px;">위험률 : ${marinAccidentPer.prediction_ratio}%</div>
                        <div style="padding:5px;">풍속 : ${tide_data.wind_speed}m/s</div>
                        <div style="padding:5px;">기온 : ${tide_data.air_temp}°C</div>
                        <div style="padding:5px;">기압 : ${tide_data.air_press}hPa</div>
                        <div style="padding:5px;">--</div>`,
          iwRemoveable = true;

      var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
      });
      setInfo(infowindow);
      infowindow.open(map, marker);
    }
  }, [tide_data]);

  function reload() {
    return window.location.reload();
  }

  return(
    <Stack>
      <HStack>
        <IconButton aria-label="Search database" icon={<RepeatIcon />}
          onClick={() => {reload()}} />
      </HStack>
      <Box id="map" 
      height={{base: "350px", md: "700px"}} 
      width={{base: "370px", md: "900px"}}
      alignItems="center"></Box>
    </Stack>
  );
}