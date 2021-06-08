import { useEffect, useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  VerticalBarSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis,
  RadialChart
} from 'react-vis';
import 'react-vis/dist/style.css';
import data from '../../data/wave_period_count.json';


export default function WavePeriodChart() {
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]
  return(
    <>
      <RadialChart
        innerRadius={100}
        radius={140}
        data={data}
        width={500}
        height={500}/>
    </>
    
  );
}