import {
  XYPlot, 
  VerticalGridLines, 
  LineSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis
} from 'react-vis';
import 'react-vis/dist/style.css';
import { 
  useBreakpointValue 
} from "@chakra-ui/react";
import data from '../../data/accidentData_year.json';

export default function TestChart() {
  const width = useBreakpointValue({ base: "300", md: "700" });
  const heigth = useBreakpointValue({ base: "300", md: "400" });
  return(
    <>
      <XYPlot xType="ordinal" width={width} height={heigth}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis />
        <LineSeries   
          color="red"
          data={data}/>
      </XYPlot>
    </>
    
  );
}