import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTasks } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../atoms/ButtonIcon";
import withContext from "../../hoc/withContext";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 10px;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.todo};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-bottom: 50px;
  padding: 15px 20px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Sidebar = ({ cardContext }) => {
  return (
    <StyledWrapper activeColor={cardContext}>
      <StyledButtonIcon as={NavLink} to="/todo" activeclass="active">
        <FontAwesomeIcon icon={faListUl} />
      </StyledButtonIcon>
      <StyledButtonIcon as={NavLink} to="/done" activeclass="active">
        <FontAwesomeIcon icon={faTasks} />
      </StyledButtonIcon>
    </StyledWrapper>
  );
};

export default withContext(Sidebar);
