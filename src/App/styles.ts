import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;

  select {
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-top: 20px;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  background: #ffff;
  color: #000;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 16px;
  text-align: center;
  opacity: 0.7;
  overflow-wrap: anywhere;
  padding: 10px;
`;

export const SpinLoad = styled.div`
 & .spin{
  margin-top: 40vh;
  justify-content: center;
  }
`;

