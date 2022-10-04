import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const SearchBar:React.FC = () => {
  return (
    <SearchBarWrapper>
      <SearchInput value={search} placeholder="search for city" onKeyPress={(e) => handleKeyPress(e)} onChange={(e) => setSearch(e.target.value)} ></Input> 
      <Button onClick={() => fetchInputData()}>Search</Button>
    </SearchBarWrapper>
  );
}

export default SearchBar;