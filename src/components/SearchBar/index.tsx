import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { SearchBarWrapper, SearchInput, Button } from './style';

const SearchBar:React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { value1, value2, value3 } = useContext(Context);
  const [weather, setWeather, forecast, setForecast, isVisible, setVisible, isFetching, setFetching, isFailed, setFailed] = value1;
  const handleKeyPress = (e: any) => {
    if(e.charCode === 13) {
      fetchInputData();
    }
  }

  const fetchInputData = () => {
    const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`;
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${search}&limit=1&appid=${API_KEY}&units=metric`; 
    axios.all([axios.get(url), axios.get(url2)])
      .then(axios.spread((first, second) => { 
        const forecast = first.data;
        const weather = second.data;
        if( typeof forecast !== 'undefined' &&  
            typeof weather !== 'undefined' && 
            typeof setForecast !== 'undefined' && 
            typeof setWeather !== 'undefined') {
            setForecast(forecast);
            setWeather(weather);
        }
      }))
      .catch((error) => { 
        if(typeof setVisible !== 'undefined' &&
           typeof setFetching !== 'undefined' && 
           typeof setFailed !== 'undefined') {
            setFailed(true); 
            setFetching(false);
            setVisible(false);
        }
      });
  }

  return (
    <SearchBarWrapper>
      <SearchInput value={search} placeholder="search for city" onKeyPress={(e) => handleKeyPress(e)} onChange={(e) => setSearch(e.target.value)} ></SearchInput> 
      <Button onClick={() => fetchInputData()}>Search</Button>
    </SearchBarWrapper>
  );
}

export default SearchBar;