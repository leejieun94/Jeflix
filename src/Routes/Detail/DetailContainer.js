import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  staet = {
    result: null,
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
