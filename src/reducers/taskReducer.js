import { REMOVE_TASK, ADD_TASK, CHANGE_TASK_STATUS } from "../actions/actions";

const initialState = {
  todo: [
    {
      id: 0,
      title: `Zdobyć pierwszą pracę jako frontend developer`,
      deadline: `2020-01-01`,
      important: true,
      finishDate: null
    }
  ],
  done: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TASK:
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType].filter(item => item.id !== action.id)
        ]
      };
    case ADD_TASK:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.id,
            title: action.title,
            deadline: action.deadline,
            important: action.important,
            finishDate: null
          }
        ]
      };
    case CHANGE_TASK_STATUS:
      let doneTask = {
        todo: [...state.todo.filter(item => item.id === action.id)]
      };
      doneTask = doneTask.todo.shift();
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType].filter(item => item.id !== action.id)
        ],
        done: [
          ...state.done,
          { ...doneTask, finishDate: new Date().toISOString().slice(0, 10) }
        ]
      };
    default:
      return state;
  }
};

export default taskReducer;
