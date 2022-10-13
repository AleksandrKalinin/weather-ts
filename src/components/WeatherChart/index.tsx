import React, { useContext, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { WeatherChartWrapper } from './style';
import { ChartDataType } from './types';
import { Context } from '../Context';

const WeatherChart = ({ height }: any) => {
  const { value4 } = useContext(Context);
  const [chartData, setChartData] = value4;

  return (
    <WeatherChartWrapper>
      <ResponsiveContainer width='100%' height={height}>
        <LineChart width={730} height={250} data={chartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' fill='#555555' />
          <XAxis dy={10} dataKey='time' tick={{ fill: '#ffffff', fontSize: 19 }} tickLine={{ stroke: '#ffffff' }} />
          <YAxis dx={-10} tick={{ fill: '#ffffff', fontSize: 19 }} tickLine={{ stroke: '#ffffff' }} />
          <Line type='monotone' dataKey='temperature' stroke='#ffffff' />
        </LineChart> 
      </ResponsiveContainer>
    </WeatherChartWrapper>
  );
}

export default WeatherChart;