import React, { useContext, useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { WeatherChartWrapper } from './style';
import { ChartDataType } from './types';

const WeatherChart = ({data} : ChartDataType | undefined) => {

  const chartData = [
    {
      'time': '00.00',
      'temperature': 7
    },
    {
      'time': '03.00',
      'temperature': 8
    },
    {
      'time': '06.00',
      'temperature': 6
    },
    {
      'time': '09.00',
      'temperature': 5
    },
    {
      'time': '12.00',
      'temperature': 4
    },
    {
      'time': '15.00',
      'temperature': 13
    },
    {
      'time': '18.00',
      'temperature': 8
    },
    {
      'time': '21.00',
      'temperature': 12
    }    
  ]

  return (
    <WeatherChartWrapper>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={730} height={250} data={chartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' fill='#555555'/>
          <XAxis dy={10} dataKey='time' tick={{ fill: '#ffffff', fontSize: 19 }} tickLine={{ stroke: '#ffffff' }} />
          <YAxis dx={-10} tick={{ fill: '#ffffff', fontSize: 19 }} tickLine={{ stroke: '#ffffff' }} />
          <Line type='monotone' dataKey='temperature' stroke='#ffffff' />
        </LineChart> 
      </ResponsiveContainer>
    </WeatherChartWrapper>
  );
}

export default WeatherChart;