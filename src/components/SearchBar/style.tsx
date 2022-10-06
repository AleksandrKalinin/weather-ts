import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  height: 36px;
  margin: 0 auto;
  max-width: 1500px;
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
`
export const SearchInput = styled.input`
  width: calc(100% - 100px);
  height: 36px;
  padding: 0 5px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  outline: none;
`
export const Button = styled.button`
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
