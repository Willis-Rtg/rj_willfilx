import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2014b2a853ddb0b466607198d962d799",
    language: "en-US"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("moive/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`)
};

export const TVApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        query: encodedURIComponent(term)
      }
    }),
  search: term =>
    api.get(`search/tv`, {
      params: {
        query: encodedURIComponent(term)
      }
    })
};

// export default api;
