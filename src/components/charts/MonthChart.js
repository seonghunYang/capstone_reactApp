import { useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  VerticalBarSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis, 
  Hint
} from 'react-vis';
import 'react-vis/dist/style.css';
import { 
  useBreakpointValue 
} from "@chakra-ui/react";
import data from '../../data/accidentData_month.json';

export default function TestChart() {
  const [value, setValue] = useState(null);

  const width = useBreakpointValue({ base: 250, md: 670 });
  const height = useBreakpointValue({ base: 250});

  return(
    <>
      <XYPlot xType="ordinal" width={width} height={height}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis />
        <VerticalBarSeries 
          color="#2C5282"
          data={data}
          onValueMouseOver={(data) => setValue(data)}
          onValueMouseOut={() => setValue(null)}/>
          {value ? <Hint value={value} /> : null}
      </XYPlot>
    </>
    
  );
}