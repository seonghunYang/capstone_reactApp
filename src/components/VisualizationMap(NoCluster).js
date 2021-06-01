import { useEffect } from "react";
import accidentData from '../location/accidentData.json';
import { Box,  IconButton, Stack, HStack } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons';
import markerImage from '../images/circle.png';

export default function Map() {
  const { kakao } = window;

  useEffect(() => {
    var container = document.getElementById('NonClusterMap');
    var options = { 
      center: new kakao.maps.LatLng(36.47914, 126.93519),
      level: 14
    };

    var map = new kakao.maps.Map(container, options);

    var imageSize = new kakao.maps.Size(10, 10); // 마커이미지의 크기입니다

    accidentData.data.map((item) => {
      var markerPosition = new kakao.maps.LatLng(item.latitude, item.longitude);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: new kakao.maps.MarkerImage(markerImage, imageSize, 0)
      });
      marker.setMap(map);
    });
  }, []);

  function reload() {
    return window.location.reload();
  }

  return(
    <Stack>
      <HStack>
        <IconButton aria-label="Search database" icon={<RepeatIcon />}
          onClick={() => {reload()}} />
      </HStack>
      <Box id="NonClusterMap" 
      height={{base: "350px", md: "700px"}} 
      width={{base: "370px", md: "900px"}}
      alignItems="center"></Box>
    </Stack>
  );
}