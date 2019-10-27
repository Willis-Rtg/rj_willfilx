import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const topRated = await TVApi.topRated();
      const popular = await TVApi.popular();
      const airingToday = await TVApi.airingToday();
    } catch {
      this.setState({
        error: "Can't find movies Infomation."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
