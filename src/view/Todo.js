import React from "react";
import { connect } from "react-redux";
import PageTemplate from "../templates/PageTemplate";
import TaskCard from "../components/molecules/TaskCard";

const Todo = ({ todo }) => {
  if (todo.length >= 2) {
    todo.sort((a, b) => {
      if (a.deadline > b.deadline) {
        return 1;
      }
      if (a.deadline < b.deadline) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <>
      <PageTemplate cardType="todo">
        {todo.map(item => (
          <TaskCard
            cardType="todo"
            id={item.id}
            key={item.id}
            title={item.title}
            deadline={item.deadline}
            important={item.important}
            finishDate={item.finishDate}
          />
        ))}
      </PageTemplate>
    </>
  );
};

const mapStateToProps = state => ({
  todo: state.taskReducer.todo
});

export default connect(mapStateToProps)(Todo);
