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
import { useState } from 'react';
import data from '../../data/accidentData_month.json';

export default function TestChart() {
  const [value, setValue] = useState(null);
  return(
    <>
      <XYPlot xType="ordinal" width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis />
        <VerticalBarSeries 
          color="red"
          data={data}
          onValueMouseOver={(data) => setValue(data)}
          onValueMouseOut={() => setValue(null)}/>
          {value ? <Hint value={value} /> : null}
      </XYPlot>
    </>
    
  );
}