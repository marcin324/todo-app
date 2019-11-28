import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateTextForm as updateTextFormAction,
  updateCheckboxForm as updateCheckedFormAction,
  updateDateForm as updateDateFormAction,
  addTask as addTaskAction
} from "../../actions/actions";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const StyledWrapper = styled.form`
  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px 80px 100px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 650px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isVisible }) => (isVisible ? "0" : "105%")});
  transition: all 0.4s ease-in-out;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 40%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledLabel = styled.label`
  padding: 15px 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

const StyledInput = styled(Input)`
  margin: auto 0;
`;

const NewItemForm = ({
  isVisible,
  updateTextForm,
  updateCheckedForm,
  updateDateForm,
  addTask,
  title,
  deadline,
  important
}) => {
  let minDate = new Date().toISOString().slice(0, 10);
  return (
    <StyledWrapper
      isVisible={isVisible}
      onSubmit={e => {
        e.preventDefault();
        addTask(title, deadline, important);
        updateTextForm("");
        updateDateForm(minDate);
        updateCheckedForm(false);
      }}
    >
      <Heading big>Dodaj nowe zadanie</Heading>
      <InnerWrapper>
        <Input
          type="text"
          placeholder="Wpisz zadanie"
          value={title}
          onChange={e => updateTextForm(e.target.value)}
        />
        <FormWrapper>
          <StyledLabel htmlFor="date">Termin wykonania:</StyledLabel>
          <Input
            type="date"
            value={deadline}
            min={minDate}
            onChange={e => updateDateForm(e.target.value)}
          />
        </FormWrapper>
        <FormWrapper>
          <StyledInput
            type="checkbox"
            checked={important}
            id="important"
            onChange={e => updateCheckedForm(e.target.checked)}
          />
          <StyledLabel htmlFor="important">Priorytet</StyledLabel>
        </FormWrapper>
      </InnerWrapper>
      <Button>Dodaj</Button>
    </StyledWrapper>
  );
};

NewItemForm.propTypes = {
  isVisible: PropTypes.bool,
  updateCheckedForm: PropTypes.func.isRequired,
  updateTextForm: PropTypes.func.isRequired,
  updateDateForm: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired
};

NewItemForm.defaultProps = {
  isVisible: false
};

const mapDispatchToProps = dispatch => ({
  updateTextForm: text => dispatch(updateTextFormAction(text)),
  updateCheckedForm: checked => dispatch(updateCheckedFormAction(checked)),
  updateDateForm: date => dispatch(updateDateFormAction(date)),
  addTask: (title, deadline, important) =>
    dispatch(addTaskAction(title, deadline, important))
});

const mapStateToProps = state => ({
  title: state.formReducer.text,
  important: state.formReducer.checked,
  deadline: state.formReducer.date
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);
