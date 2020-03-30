import debounce from "utils/debounce";

import styled from "styled-components";
// utils

/**
 * Хок лоадера
 * @param {component} Content Компонент который нужно зарендерить с лоадером
 * @returns {component}
 */
const withLoader = Content => {
  return class Loadable extends Component {
    state = {
      display: "flex",
      opacity: 1,
      time: 0.7
    };

    /* метод скрытия лоадера */
    hide = () => {
      const { loaderCallBack } = this.props;
      debounce(() => this.setState({ opacity: 0 }), this.props.loaderDelay);
      setTimeout(() => {
        this.setState({ display: "none" });
        loaderCallBack && loaderCallBack();
      }, this.props.loaderDelay + 700);
    };

    componentDidMount() {
      this.hide();
    }

    render() {
      const loader = this.props.loader(this.state);
      return (
        <>
          <Content {...this.props} hideLoader={this.hide} />
          {loader}
        </>
      );
    }
  };
};

export default withLoader;
