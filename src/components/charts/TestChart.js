import {XYPlot, VerticalGridLines, VerticalBarSeries, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { Center } from "@chakra-ui/react";
import 'react-vis/dist/style.css';

export default function TestChart() {
  return(
    <>
      <XYPlot xType="ordinal" width={250} height={250}>
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
    </>
    
  );
}