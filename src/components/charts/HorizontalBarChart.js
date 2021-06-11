import { useEffect, useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  HorizontalGridLines, 
  XAxis, 
  YAxis, 
  Hint,
  HorizontalBarSeries
} from 'react-vis';
import 'react-vis/dist/style.css';
import { 
  useBreakpointValue 
} from "@chakra-ui/react";

import countData from '../../data/countData.json';


export default function HorizontalBarChart({type}) {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  const width = useBreakpointValue({ base: 250, md: 250 });
  const height = useBreakpointValue({ base: 250, md: 400 });
  useEffect(() => {
    setData(countData.wave_period);
  }, []);
  useEffect(() => {
    if(type === 'wave_period'){
      setData(countData.wave_period);
    }
    else if(type === 'wind_speed') {
      setData(countData.wind_speed);
    }
    else if(type === 'air_press'){
      setData(countData.air_press);
    }
    else if(type === 'wave_height') {
      setData(countData.wave_height.average);
    }
    else if(type === 'humidity'){
      setData(countData.humidity);
    }
    else if(type === 'water_temp') {
      setData(countData.water_temp);
    }
    else {
      setData(countData.temperature);
    }
  },[type]);

  return(
    <>
      <XYPlot yType="ordinal" xType="linear" width={width} height={height}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis tickLabelAngle={45}/>
        <HorizontalBarSeries colorScheme="teal"
          data={data}
          onValueMouseOver={(data) => setValue(data)}
          onValueMouseOut={() => setValue(null)}/>
          {value ? <Hint value={value} /> : null}
      </XYPlot>
    </>
  );
}