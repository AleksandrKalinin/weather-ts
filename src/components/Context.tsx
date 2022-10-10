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

type CurrentContextValue = [Weather?, React.Dispatch<React.SetStateAction<Weather | undefined>>?, 
                            Forecast?, React.Dispatch<React.SetStateAction<Forecast | undefined>>?,
                            boolean?, React.Dispatch<React.SetStateAction<any>>?,
                            boolean?, React.Dispatch<React.SetStateAction<any>>?,
                            boolean?, React.Dispatch<React.SetStateAction<any>>?,
                            boolean?, React.Dispatch<React.SetStateAction<any>>?];

export const Context = React.createContext<CurrentContextValue | undefined>(undefined);
