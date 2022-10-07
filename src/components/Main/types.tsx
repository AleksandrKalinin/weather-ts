export type Weather = {
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

export type Forecast = {
  city: object,
  cnt: number,
  code: string,
  list: { [key:string]: any }[],
  message: number 
}

export type ForecastData = {
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

export type NewObj = {
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