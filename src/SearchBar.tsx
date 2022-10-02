import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const SearchInput = styled.input`
  height: 50px;
  width: calc(100% - 100px);
  background: transparent;
  border: 1px solid #222A35;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  height: 50px;
  width: 100px;
`

const SearchBar:React.FC = () => {

  const [cityName, setCityName] = useState<string>('');

  const [data, setData] = useState<object>({});

  const fetchData = () => {
    const API_KEY = 'a5821f4600801be4a4ebefc0a0a643ba';
    const API_link = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(API_link)
      .then((response) => response.json())
      .then((data) => consoleData(data)) 
  }

  const consoleData = (data: object) => {
    setData(data);
  }

  return (
    <SearchBarWrapper>
      <SearchInput onChange = {(e) => setCityName(e.target.value)} />
      <Button onClick={() => fetchData()}>Search</Button>
    </SearchBarWrapper>
  );
}

export default SearchBar;