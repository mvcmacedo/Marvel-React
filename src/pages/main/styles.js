import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 10px;

  img {
    height: 100px;
    margin: 10px;
    padding: 0px;
    box-shadow: 5px 5px 5px gray;
    transition: 0.3s;

    &:hover {
      box-shadow: none;
      box-shadow: 2px 2px 2px gray;
    }
  }

  h1 {
    font-style: italic;
    font-size: 50px;
    padding: 20px;
    margin: 20px;
    color: #a52a2a;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: underline;
  }
`;
