import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${(props) => props.theme.colors.title};

    > span {
      color: ${(props) => props.theme.colors.title};
    }
    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: ${(props) => props.theme.colors.white};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
        flex: 1;
      }

      span:first-child {
        border-right: 1px solid ${(props) => props.theme.colors.backBox};
        background: ${(props) => props.theme.colors.background};
      }

      span:last-child {
        border-left: 1px solid ${(props) => props.theme.colors.backBox};
        background: ${(props) => props.theme.colors.background};
      }
    }

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  }

  > button {
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    font-size: 140%;
    font-weight: 600;
    transition: background-color 0.2s;

    > img {
      align-self: center;
      margin-left: 1.1rem;
      height: 18px;
      width: 18px;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors.blueDark};
    }
  }

  > button.activeButton {
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors.redDark};
      color: ${(props) => props.theme.colors.white};
    }
  }

  > button:disabled {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    cursor: not-allowed;

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid ${(props) => props.theme.colors.green};
  }
`;
