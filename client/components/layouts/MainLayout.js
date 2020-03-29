// components
import Header from "./components/header/";
import Sidebar from "./components/sidebar/";

import React, { Component } from "react";

class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {this.props.children}
      </>
    );
  }
}

export default MainLayout;
