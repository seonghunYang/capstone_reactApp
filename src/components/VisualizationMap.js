import { useEffect } from "react";
import accidentData from '../location/accidentData.json';
import { Box,  IconButton, Stack, HStack } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons';
import markerImage from '../images/circle.png';

export default function Map() {
  const { kakao } = window;

  useEffect(() => {
    var container = document.getElementById('clusterMap');
    var options = { 
      center: new kakao.maps.LatLng(36.47914, 126.93519),
      level: 14
    };

    var map = new kakao.maps.Map(container, options);

    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
      minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });

    var imageSize = new kakao.maps.Size(10, 10); // 마커이미지의 크기입니다

    var markers = accidentData.data.map((item) => {
      return new kakao.maps.Marker({
        position : new kakao.maps.LatLng(item.latitude, item.longitude),
        image: new kakao.maps.MarkerImage(markerImage, imageSize, 0)
      });
    });

    clusterer.addMarkers(markers);
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
      <Box id="clusterMap" 
      height={{base: "350px", md: "700px"}} 
      width={{base: "370px", md: "900px"}}
      alignItems="center"></Box>
    </Stack>
  );
}