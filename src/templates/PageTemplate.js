import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/molecules/Sidebar";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import ButtonIcon from "../components/atoms/ButtonIcon";
import NewItemForm from "../components/molecules/NewItemForm";
import withContext from "../hoc/withContext";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  padding: 50px 100px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 70px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    padding: 50px 150px;
  }

  @media (max-width: 850px) {
    padding: 50px 100px;
  }
`;

const StyledPageHeader = styled.div`
  padding: 50px 100px 0;
  margin: 0 0 20px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 10px;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 55px;
  height: 55px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.todo};
  border-radius: 50%;
  z-index: 10000;
`;

class PageTemplate extends Component {
  state = {
    isNewItemFormVisible: false
  };

  handleNewItemFormToggle = () => {
    this.setState(prevState => ({
      isNewItemFormVisible: !prevState.isNewItemFormVisible
    }));
  };

  render() {
    const { children, cardContext, todo } = this.props;
    const { isNewItemFormVisible } = this.state;

    return (
      <>
        <Sidebar />

        <StyledPageHeader>
          <StyledHeading big as="h1">
            {cardContext === "todo" && `Twoje zadania czekające na realizację`}
            {cardContext === "done" && `Zadania zrealizowane`}
          </StyledHeading>
          <StyledParagraph>
            {cardContext === "todo" && `liczba zadań: ${todo.length}`}
          </StyledParagraph>
        </StyledPageHeader>

        <StyledGrid>{children}</StyledGrid>
        {cardContext === "todo" && (
          <StyledButtonIcon onClick={this.handleNewItemFormToggle}>
            <FontAwesomeIcon icon={faPlus} />
          </StyledButtonIcon>
        )}
        <NewItemForm isVisible={isNewItemFormVisible} />
      </>
    );
  }
}

PageTemplate.propTypes = {
  children: PropTypes.array.isRequired,
  cardContext: PropTypes.oneOf(["todo", "done"])
};

PageTemplate.defaultProps = {
  cardContext: "todo"
};

const mapStateToProps = state => ({
  todo: state.taskReducer.todo
});

export default connect(mapStateToProps)(withContext(PageTemplate));
