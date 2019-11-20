import styled from "styled-components";

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey200};
  border: none;
  border-radius: 50px;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

export default Input;
