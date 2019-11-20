import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import PageContext from "../context/index";

class MainTemplate extends Component {
  state = {
    pageType: "todo"
  };

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["todo", "done"];
    const {
      location: { pathname }
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({
        pageType: currentPage
      });
    }
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default withRouter(MainTemplate);
