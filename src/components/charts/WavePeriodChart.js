import { useEffect, useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  MarkSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis
} from 'react-vis';
import 'react-vis/dist/style.css';
import datas from '../../data/wave_period_count.json';

function getDate() {
  return datas.map((data) => ({
    x: Math.floor(data.x),
    y: Number((data.x % 1).toFixed(1)),
    size: data.y / 5,
    opacity: data.y * 0.01
  }));
}

export default function TestChart() {
  const [waveData, setWaveData] = useState(null);

  useEffect(() => {
    setWaveData(getDate());
  }, []);
  return(
    <>
      <XYPlot xType="ordinal" width={1000} height={500} yDomain={[0,0.9,3]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis/>
        < MarkSeries
          className="mark-series-example"
          data={waveData}
          sizeRange={[5, 10]}
          opacityType='literal'/>
      </XYPlot>
    </>
    
  );
}