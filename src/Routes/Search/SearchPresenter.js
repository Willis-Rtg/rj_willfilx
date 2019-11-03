import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Willfilx</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Show..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(tv => (
              <span key={tv.id}>{tv.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message text={error} color="#70a1ff" />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message text={`Nothing found`} color="#a4b0be" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSumbit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
