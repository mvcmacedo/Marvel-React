import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.characters.length > 0 ? 'flex' : 'none')};
  height: 100%;
  background: lightgray;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 10px;
`;

export const Repository = styled.div`
  width: 10%;
  height: 100%;
  background: #e6e6fa;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;
  box-shadow: 4px 4px 10px gray;
  transition: width 0.1s;
  &:hover {
    width: 13%;
    li {
      font-size: 15px;
      small {
        font-size: 20px;
      }
    }
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      border-radius: 5px;
    }
    strong {
      font-size: 20px;
      margin-top: 10px;
      font-style: bold;
      color: gray;
    }
    small {
      font-size: 14px;
      color: #f00;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: normal;
      padding: 10px 15px;
      border-radius: 10px;
      margin: 5px;
      font-size: 10px;
      font-style: italic bold;
      color: black;
      small {
        font-weight: normal;
        font-size: 10px;
        margin-right: 5px;
        color: gray;
        font-style: normal;
      }
      &:nth-child(2n - 1) {
        background: #b22222;
        small {
          color: #fff;
        }
      }
    }
  }
`;
