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
    country: string,
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

type setWeather = (value: any) => void;

type setForecast = (value: any) => void;

type CurrentContextValue = [Weather?, React.Dispatch<React.SetStateAction<Weather | undefined>>?, 
                            Forecast?, React.Dispatch<React.SetStateAction<Forecast | undefined>>?];

const initialWeather = 
  {
    base: '',
    clouds: {},
    cod: 0,
    coord: {},
    dt: 0,
    id: 0,
    main: {},
    name: '',
    rain: {},
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    visibility: 0,
    weather: [],
    wind: { }    
  }

const initialForecast = {
  city: {},
  cnt: 0,
  code: '',
  list: [],
  message: 0  
}


export const Context = React.createContext<CurrentContextValue>([initialWeather, () => null, initialForecast, () => null]);
