import uuid from "uuid";

export const ADD_TASK = "ADD_TASK";
export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TEXT_FORM = "UPDATE_TEXT_FORM";
export const UPDATE_DATE_FORM = "UPDATE_DATE_FORM";
export const UPDATE_CHECKBOX_FORM = "UPDATE_CHECKBOX_FORM";

export const addTask = (title, deadline, important) => ({
  type: ADD_TASK,
  id: uuid.v4(),
  title,
  deadline,
  important
});

export const changeTaskStatus = (itemType, id) => ({
  type: CHANGE_TASK_STATUS,
  itemType,
  id
});

export const removeTask = (itemType, id) => ({
  type: REMOVE_TASK,
  itemType,
  id
});

export const updateTextForm = text => ({
  type: UPDATE_TEXT_FORM,
  text
});

export const updateCheckboxForm = checked => ({
  type: UPDATE_CHECKBOX_FORM,
  checked
});

export const updateDateForm = date => ({
  type: UPDATE_DATE_FORM,
  date
});
