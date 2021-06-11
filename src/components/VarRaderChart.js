import React, {useState, useEffect} from 'react';
import {RadarChart} from 'react-vis';
const DATA = [
  {
    name: 'Spider5',
    풍속: 2,
    기압: 2,
    습도: 2,
    기온: 2,  
    파주기: 2,
    파고: 2,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider4',
    풍속: 1.6,
    기압: 1.6,
    습도: 1.6,
    기온: 1.6,
    파주기: 1.6,
    파고: 1.6,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider3',
    풍속: 1.2,
    기압: 1.2,
    습도: 1.2,
    기온: 1.2,
    파주기: 1.2,
    파고: 1.2,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider2',
    풍속: 0.8,
    기압: 0.8,
    습도: 0.8,
    기온: 0.8,
    파주기: 0.8,
    파고: 0.8,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider1',
    풍속: 0.4,
    기압: 0.4,
    습도: 0.4,
    기온: 0.4,
    파주기: 0.4,
    파고: 0.4,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider0',
    풍속: 0.1,
    기압: 0.1,
    습도: 0.1,
    기온: 0.1,
    파주기: 0.1,
    파고: 0.1,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Mercedes',
    풍속: 1.2,
    기압: 1.1,
    습도: 0.8,
    기온: 0.9,   
    파주기: 0.5,
    파고: 1.84,
    fill: 'rgba(114,172,240,0.5)',
    stroke: 'rgba(114,172,240,0.2)'
  }
];

const VarRaderChart = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    const raderChartDiv = document.querySelector(".rv-radar-chart");
    if (isDesktop) {
      raderChartDiv.style.width = "600px"
      raderChartDiv.childNodes[0].style.width = "500px"
      raderChartDiv.childNodes[0].style.marginLeft = "20px"
      raderChartDiv.childNodes[0].style.marginTop = "30px"
    } else { 
      raderChartDiv.style.width = "300px"
      raderChartDiv.childNodes[0].style.width = "300px"
    }
  }, [isDesktop, isMobile])
  return (
    <RadarChart
    data={DATA}
    tickFormat={t => {
      return '';
    }}
    startingAngle={0}
    domains={[
      {
        name: '풍속',
        domain: [0, 2],
      },
      {
        name: '기압',
        domain: [0, 2],
        getValue: d => d.기압
      },
      {name: '습도', domain: [0, 2], getValue: d => d.습도},
      {name: '기온', domain: [0, 2], getValue: d => d.기온},
      {name: '파고', domain: [0, 2], getValue: d => d.파고},
      {name: '파주기', domain: [0, 2], getValue: d => d.파주기}
    ]}
    style={{
      labels: {
        fontSize: 10,
      },
    }}
    width={isDesktop ? 250 : 150}
    height={isDesktop ? 250: 150}
    style={{
      polygons: {
        strokeWidth: 1,
        strokeOpacity: 0.8,
        fillOpacity: 0.8
      },
      labels: {
        fontSize:10
      },
      axes: {
        line: {
          fillOpacity: 0.8,
          strokeWidth: 0.5,
          strokeOpacity: 0.8
        },
        ticks: {
          fillOpacity: 0,
          strokeOpacity: 0
        },
        text: {}
      }
    }}
    startingAngle={0}
    colorRange={['transparent']}
    hideInnerMostValues={false}
    renderAxesOverPolygons={true}
  />
  )
}

export default VarRaderChart;