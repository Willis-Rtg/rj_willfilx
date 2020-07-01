import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, TVApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return push("/");
    let result = null;
    // const test = await moviesApi.movieDetail(parsedId);
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await TVApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log("TCL: extends -> render -> result", result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
