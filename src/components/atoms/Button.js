import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 25px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.todo};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: ${({ theme }) => theme.todo};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
