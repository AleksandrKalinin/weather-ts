import React, { useContext, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { WeatherChartWrapper } from './style';
import { ChartDataType } from './types';
import { Context } from '../Context';

const WeatherChart = ({item} : any) => {
  const { value3, value4 } = useContext(Context);
  const [chartData, setChartData] = value4;
  const [modalData, setModalData] = value3;

  return (
    <WeatherChartWrapper>
      <ResponsiveContainer width='100%' height={250}>
        <LineChart width={730} height={250} data={item.chartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' fill='#555555' />
          <XAxis xAxisId="0" dx={0} dy={10} dataKey='time' tick={{ fill: '#ffffff', fontSize: 16 }} tickLine={{ stroke: '#ffffff' }} />
          <XAxis xAxisId="1" dx={0} dy={10} dataKey='date' tick={{ fill: '#ffffff', fontSize: 12 }} tickLine={{ stroke: '#ffffff' }} />
          <YAxis dx={-10} tick={{ fill: '#ffffff', fontSize: 16 }} tickLine={{ stroke: '#ffffff' }} />
          <Line type='monotone' dataKey='temperature' stroke='#ffffff' />
        </LineChart> 
      </ResponsiveContainer>
    </WeatherChartWrapper>
  );
}

export default WeatherChart;