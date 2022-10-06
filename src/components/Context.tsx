import React, { createContext } from 'react';
type Weather = {
  base: string,
  clouds: object,
  cod: number,
  coord: object,
  dt: number,
  id: number,
  main: { [key: string]: any },
  name: string,
  rain: object,
  sys: {
    country: 'string',
    sunrise: number,
    sunset: number
  },
  timezone: number,
  visibility: number,
  weather: { [key: string]: any }[],
  wind: { [key: string]: any }
}

type Forecast = {
  city: object,
  cnt: number,
  code: string,
  list: { [key:string]: any }[],
  message: number 
}

type ForecastData = {
  formattedTime?: string,
  weekday?: string,
  day?: number,
  temp?: number,
  max?: number,
  min?: number,
  currentName?: string,
  currentDescription?: string,
  icon?: string,
  wind?: number  
}

type ContextData = {
	weather: Weather,
	forecast: Forecast,
	isFetching: boolean,
	isFailed: boolean,
	isVisible: boolean
}

export const Context = React.createContext<null>(null);