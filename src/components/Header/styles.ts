import styled from 'styled-components';

export const Container = styled.header`
  background: #FFFF;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  border-radius: 6px;
  margin-top: 5px;
  opacity: 0.7;

  h3 {
    color: #000;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

`;



export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    span {
      color: #c2c2c2;
    }
    color: #c2c2c2;
  }

  span {
    color: #000;
    font-weight: bold;
  }

`;
