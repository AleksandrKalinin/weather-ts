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
  city: {
    coord: {},
    country: string,
    id: number,
    name: "Gomel",
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
  },
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

export type GeoType = {
  coords: {
    latitude: number | null,
    longitude: number | null,
    altitude: number | null,
    accuracy: number | null,
    altitudeAccuracy: number | null,
    speed: number | null
  },
  timestamp: number,
}

export type RequestData = {
  data: {},
  status: number,
  statusText: string,
  headers: {},
  config: {},
  request: {}
}

export type ModalDataType = {
  city?: string,
  country?: string,
  currentDescription?: string,
  currentName?: string,
  day?: number,
  feelsLike?: number,
  formattedDate: Date,
  formattedTime?: string,
  humidity?: number,
  icon: React.ReactNode,
  max?: number,
  min?: number,
  pressure?: number,
  sunrise?: number,
  sunset?: number,
  temp?: number,
  weekday?: number,
  wind?: number
}

export type ChartDataType = {
  time?: string,
  temperature?: number
}