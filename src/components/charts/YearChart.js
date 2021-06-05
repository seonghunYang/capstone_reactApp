import {
  XYPlot, 
  VerticalGridLines, 
  LineSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis
} from 'react-vis';
import 'react-vis/dist/style.css';
import data from '../../data/accidentData_year.json';

export default function TestChart() {
  return(
    <>
      <XYPlot xType="ordinal" width={1000} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis />
        <LineSeries   
          color="red"
          data={data}/>
      </XYPlot>
    </>
    
  );
}