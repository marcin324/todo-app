import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../atoms/Paragraph";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import {
  removeTask as removeTaskAction,
  changeTaskStatus as changeTaskStatusAction
} from "../../actions/actions";

const StyledWrapper = styled.div`
  min-height: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;

  ${({ colored }) =>
    colored &&
    css`
      background-color: ${({ activeColor, theme }) =>
        activeColor ? theme[activeColor] : theme.todo};
    `}

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeading = styled(Heading)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isImportant }) => (isImportant ? "red" : "black")};

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledDateInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TaskCard = ({
  cardType,
  title,
  deadline,
  important,
  finishDate,
  id,
  removeTask,
  changeTaskStatus
}) => {
  return (
    <StyledWrapper>
      <InnerWrapper colored activeColor={cardType}>
        <StyledHeading>
          {cardType === "todo" && `Zadanie do zrobienia`}
          {important && (
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              color="red"
            />
          )}
          {cardType === "done" && `Zadanie wykonane`}
        </StyledHeading>
      </InnerWrapper>
      <InnerWrapper flex>
        <StyledParagraph isImportant={important}>
          {title}
        </StyledParagraph>
        <StyledDateInfo>
          <Paragraph>
            {`termin: ${deadline}`}
          </Paragraph>
          <Paragraph>
            {cardType === "done" && `wykonano: ${finishDate}`}
          </Paragraph>
        </StyledDateInfo>
        <ButtonWrapper>
          <Button secondary onClick={() => removeTask(cardType, id)}>
            Usuń
          </Button>
          {cardType === "todo" && (
            <Button tertiary onClick={() => changeTaskStatus(cardType, id)}>
              Zrobione
            </Button>
          )}
        </ButtonWrapper>
      </InnerWrapper>
    </StyledWrapper>
  );
};

TaskCard.propTypes = {
  cardType: PropTypes.oneOf(["todo", "done"])
};

TaskCard.defaultProps = {
  cardType: "todo"
};

const mapDispatchToProps = dispatch => ({
  removeTask: (itemType, id) => dispatch(removeTaskAction(itemType, id)),
  changeTaskStatus: (itemType, id) =>
    dispatch(changeTaskStatusAction(itemType, id))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskCard);
