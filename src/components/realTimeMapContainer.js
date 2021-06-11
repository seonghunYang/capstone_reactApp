/*global kakao*/ 

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const RealTimeMapContainer = ( {geolocationPath} ) => {
    const map = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 5
		};
        map.current = new kakao.maps.Map(container, options);
    }, []);

    useEffect(() => {
        const length = geolocationPath.length
        if (length !== 0) {
            const locPosition = new kakao.maps.LatLng(geolocationPath[length-1].lat, geolocationPath[length-1].lng)
            // maker 선택
            new kakao.maps.Marker({
                map: map.current,
                position : locPosition
            });
            map.current.setCenter(locPosition);
            map.current.setLevel(12);
            var geocoder = new kakao.maps.services.Geocoder();
            geocoder.coord2RegionCode(locPosition.getLng(), locPosition.getLat(), (result) => {
            console.log(result)
                dispatch({
                type: "CHANGE_LOCATION",
                payload: result[0].address_name
            })
            }); 
            // 경로 표시
            const paths = geolocationPath.map(location => {
                return new kakao.maps.LatLng(location.lat, location.lng)
            })
            console.log(paths)
            new kakao.maps.Polyline({
                map: map.current,
                path: paths, 
                strokeWeight: 2,
                strokeColor: '#FF00FF',
                strokeOpacity: 0.8,
                strokeStyle: 'dashed'
            });
        }
    }, [geolocationPath])

    return (
        <div id='myMap' style={{
            width: '400px', 
            height: '400px'
        }}></div>
    );
}

export default RealTimeMapContainer; 