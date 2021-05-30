import {XYPlot, VerticalGridLines, VerticalBarSeries, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

export default function TestChart() {
  return(
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
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
      <VerticalGridLines />
      <HorizontalGridLines />
    </XYPlot>
  );
}