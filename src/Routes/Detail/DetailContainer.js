import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends Reac.Component {
  state = {
    result: null,
    error: null,
    locaing: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
