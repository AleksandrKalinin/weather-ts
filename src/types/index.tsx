export type SingleItemType = {
  item: {
    city?: string,
    country?: string,
    currentDescription?: string,
    currentName?: string,
    day?: number,
    feelsLike?: number,
    formattedDate?: Date | string,
    formattedTime?: string,
    humidity?: number,
    icon: JSX.Element,
    max?: number,
    min?: number,
    pressure?: number,
    sunrise?: number,
    sunset?: number,
    temp?: number,
    weekday?: number,
    wind?: number
  }
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

export type ChartHeightType = {
  height: number
}
