import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title> TV | Willfilx </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={
                  tv.first_air_date && new Date().getFullYear(tv.first_air_date)
                }
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={
                  tv.first_air_date && new Date().getFullYear(tv.first_air_date)
                }
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={
                  tv.first_air_date && new Date().getFullYear(tv.first_air_date)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#70a1ff" />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
