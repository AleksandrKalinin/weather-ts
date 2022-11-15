import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { WeatherChartWrapper } from './style';
import { ModalDataType } from './types';

type PropsType = {
  item: ModalDataType | null
}

const WeatherChart = (item: PropsType) => {
  return (
    <WeatherChartWrapper>
      <ResponsiveContainer width='100%' height={250}>
        <LineChart width={730} 
                   height={250}
                   data={item?.item?.chartData}
                   margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' fill='#555555' />
          <XAxis xAxisId="0" dx={0} dy={10} dataKey='time' tick={{ fill: '#ffffff', fontSize: 16 }} tickLine={{ stroke: '#ffffff' }} />
          <XAxis xAxisId="1" dx={0} dy={10} dataKey='date' tick={{ fill: '#ffffff', fontSize: 12 }} tickLine={{ stroke: '#ffffff' }} />
          <YAxis width={40} dx={-10} tick={{ fill: '#ffffff', fontSize: 16 }} tickLine={{ stroke: '#ffffff' }} />
          <Line type='monotone' dataKey='temperature' stroke='#ffffff' />
        </LineChart> 
      </ResponsiveContainer>
    </WeatherChartWrapper>
  );
}

export default WeatherChart;