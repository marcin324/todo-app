import React from "react";
import { connect } from "react-redux";
import PageTemplate from "../templates/PageTemplate";
import TaskCard from "../components/molecules/TaskCard";

const Done = ({ done }) => {
  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <>
      <PageTemplate cardType="done">
        {done.map(item => (
          <TaskCard
            cardType="done"
            id={item.id}
            key={item.id}
            title={item.title}
            deadline={item.deadline}
            finishDate={item.finishDate}
          />
        ))}
      </PageTemplate>
    </>
  );
};

const mapStateToProps = state => ({
  done: state.taskReducer.done
});

export default connect(mapStateToProps)(Done);
