import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchBarWrapper = styled.div`
  height: 36px;
  margin: 0 auto;
  max-width: 1500px;
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
`
const SearchInput = styled.input`
  width: calc(100% - 100px);
  height: 36px;
  padding: 0 5px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  outline: none;
`
const Button = styled.button`
  width: 85px;
  color: #fff;
  border-radius: none;
  margin-left: 5px;
  z-index: 999;
  background: #2595EA;
  border: none;
  height: 36px;
  cursor: pointer;
  border-radius: 3px;
  margin-top: -1px;
  &:hover {
    background: #2185D0;
  }
`
type Forecast = {
  city: object,
  cnt: number,
  code: string,
  list: { [key:string]: any }[],
  message: number 
}


const SearchBar:React.FC = () => {

  const [search, setSearch] = useState<string>('');
  const [forecast, setForecast] = useState<Forecast>();

  const handleKeyPress = (e: any) => {
    if(e.charCode === 13) {
      fetchInputData();
      setSearch('')
    }
  }

  const fetchInputData = () => {
    const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`;
    const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${search}&limit=1&appid=${API_KEY}&units=metric`; 
      axios.all([axios.get(url), axios.get(url2)])
        .then(axios.spread((first, second) => { 
          const forecast = first.data;
          const weather = second.data;
          setForecast(forecast);
          //setWeather(weather);
        }))
        .catch((error) => { 
          //setFailed(true); 
          //setFetching(false);
          //setVisible(false)
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