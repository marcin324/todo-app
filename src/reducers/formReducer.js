import {
  UPDATE_TEXT_FORM,
  UPDATE_CHECKBOX_FORM,
  UPDATE_DATE_FORM
} from "../actions/actions";

let minDate = new Date().toISOString().slice(0, 10);

const initialState = {
  text: "",
  date: minDate,
  checked: false
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT_FORM:
      return {
        ...state,
        text: action.text
      };
    case UPDATE_DATE_FORM:
      return {
        ...state,
        date: action.date
      };
    case UPDATE_CHECKBOX_FORM:
      return {
        ...state,
        checked: action.checked
      };
    default:
      return state;
  }
};

export default formReducer;
