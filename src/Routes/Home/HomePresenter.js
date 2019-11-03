import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
  padding-top: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, Loader, error }) => (
  <>
    <Helmet>
      <title> Movies | Willfilx </title>
    </Helmet>
    {Loader ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title> Movies | Willfilx </title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={
                  movie.release_date &&
                  new Date().getFullYear(movie.release_date)
                }
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={
                  movie.release_date &&
                  new Date().getFullYear(movie.release_date)
                }
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={
                  movie.release_date &&
                  new Date().getFullYear(movie.release_date)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#70a1ff" />}
      </Container>
    )}
    ;
  </>
);
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  Loader: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
