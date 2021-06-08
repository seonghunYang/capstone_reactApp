import { useEffect, useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  VerticalBarSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis, 
  Hint,
  LineSeries
} from 'react-vis';
import 'react-vis/dist/style.css';
import { 
  useBreakpointValue 
} from "@chakra-ui/react";

import top3Data from '../../data/top3Data.json';


export default function Top3Chart({type}) {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);
  const [ydomain, setDomain] = useState(null);

  const width = useBreakpointValue({ base: 250, md: 500 });
  const height = useBreakpointValue({ base: 250, md: 500 });
  useEffect(() => {
    setData(top3Data.wave_period);
  }, []);
  useEffect(() => {
    if(type == 'wave_period'){
      setData(top3Data.wave_period);
      setDomain([21000, 24000]);
    }
    else if(type == 'wind_speed') {
      setData(top3Data.wind_speed);
      setDomain([3800, 3950]);
    }
    else if(type == 'air_press'){
      setData(top3Data.air_press);
      setDomain([100, 3900]);
    }
    else if(type == 'wave_height') {
      setData(top3Data.wave_height.max);
      setDomain([17000, 20200]);
    }
    else if(type == 'humidity'){
      setData(top3Data.humidity);
      setDomain([7600, 8300]);
    }
    else if(type == 'water_temp') {
      setData(top3Data.water_temp);
      setDomain([1550, 1600]);
    }
    else {
      setData(top3Data.temperature);
      setDomain([1380, 1430]);
    }
  },[type]);

  return(
    <>
      <XYPlot xType="ordinal" width={width} height={height} yDomain={ydomain}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis tickLabelAngle={45}/>
        <VerticalBarSeries 
          colorScheme="teal"
          data={data}
          onValueMouseOver={(data) => setValue(data)}
          onValueMouseOut={() => setValue(null)}/>
          {value ? <Hint value={value} /> : null}
      </XYPlot>
    </>
  );
}