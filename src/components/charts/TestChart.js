import {XYPlot, VerticalGridLines, VerticalBarSeries, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { Center } from "@chakra-ui/react"
import 'react-vis/dist/style.css';

export default function TestChart() {
  return(
    <Center>
      <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          data={[
            {x: 'Apples', y: 10},
            {x: 'Bananas', y: 5},
            {x: 'Cranberries', y: 15}
          ]}
        />
        <VerticalBarSeries
          data={[
            {x: 'Apples', y: 12},
            {x: 'Bananas', y: 2},
            {x: 'Cranberries', y: 11}
          ]}
        />
      </XYPlot>
    </Center>
    
  );
}