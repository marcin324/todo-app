import styled from "styled-components";

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
