export type ChartDataType = {
  time?: string,
  date?: string,
  temperature?: number
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
  wind?: number,
  chartData: ChartDataType[]
}
