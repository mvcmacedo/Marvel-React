import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Form = styled.form`
  margin: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-self: center;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border: 2px solid #fff;
    border-radius: 5px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }
  button {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #f00;
    color: #fff;
    border: 2px solid #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    &:hover {
      background: #800000;
    }
  }
`;
