import { useEffect } from "react";
import accidentData from '../data/accidentData.json';
import { Box,  IconButton, Stack, HStack } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons';
import markerImage from '../images/pointer.png';

export default function Map() {
  const { kakao } = window;

  useEffect(() => {
    var container = document.getElementById('clusterMap');
    var options = { 
      center: new kakao.maps.LatLng(37.87914, 126.93519),
      level: 14
    };

    var map = new kakao.maps.Map(container, options);

    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
      minLevel: 10, // 클러스터 할 최소 지도 레벨 
      calculator : [20, 75, 120, 170],
      styles: [{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
        width : "30px", height : "30px",
        background: "rgba(204, 17, 0, .95)",
        borderRadius: "15px",
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: "31px"
        },
        {
        width : "40px", height : "40px",
        background: "rgba(230, 21, 3, .95)",
        borderRadius: "20px",
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: "41px"
        },
        {
        width : "50px", height : "50px",
        background: "rgba(255, 25, 6, .95)",
        borderRadius: "25px",
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: "51px"
        },
        {
        width : "60px", height : "60px",
        background: "rgba(225, 48, 28, .95)",
        borderRadius: "30px",
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: "61px"
        }
      ]
    });

    var imageSize = new kakao.maps.Size(15, 15); // 마커이미지의 크기입니다

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
      {/* <HStack>
        <IconButton aria-label="Search database" icon={<RepeatIcon />}
          onClick={() => {reload()}} />
      </HStack> */}
      <Box id="clusterMap" 
      height={{base: "350px", md: "500px"}} 
      width={{base: "370px", md: "700px"}}
      alignItems="center"></Box>
    </Stack>
  );
}