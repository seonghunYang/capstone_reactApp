import { useEffect, useState } from 'react';
import {
  XYPlot, 
  VerticalGridLines, 
  HorizontalBarSeries, 
  HorizontalGridLines, 
  XAxis, 
  YAxis,
  RadialChart
} from 'react-vis';
import 'react-vis/dist/style.css';
import data from '../../data/wave_period_count.json';


export default function WavePeriodChart() {
  return(
    <>
      <XYPlot yType="ordinal" xType="linear" width={900} height={900}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis/>
        <YAxis />
        <HorizontalBarSeries data={data}/>
      </XYPlot>
    </>
    
  );
}