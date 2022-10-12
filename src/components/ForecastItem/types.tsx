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
    icon: React.Component<any, any>,
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

export type Props = {
  item: {
    formattedTime?: string,
    weekday?: string,
    day?: number,
    temp?: number,
    max?: number,
    min?: number,
    currentName?: string,
    currentDescription?: string,
    icon: string,
    wind?: number    
  }
}