import React from 'react';
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

type ChartDataType = {
  time: string,
  temperature: number
}

type value1Type = [
    Weather?, React.Dispatch<React.SetStateAction<Weather | undefined>>?, 
    Forecast?, React.Dispatch<React.SetStateAction<Forecast | undefined>>?,
    boolean?, React.Dispatch<React.SetStateAction<any>>?,
    boolean?, React.Dispatch<React.SetStateAction<any>>?,
    boolean?, React.Dispatch<React.SetStateAction<any>>?]  

type value2Type = [boolean?, React.Dispatch<React.SetStateAction<any>>?]

type value3Type = [boolean?, React.Dispatch<React.SetStateAction<any>>?]

type value4Type = [ChartDataType?, React.Dispatch<React.SetStateAction<any>>?]

type CurrentContextValue = {
  value: {
    value1: value1Type, 
    value2: value2Type, 
    value3: value3Type,
    value4: value4Type    
  }
}

export const Context = React.createContext<any>(undefined)