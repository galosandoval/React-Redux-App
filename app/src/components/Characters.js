import React, { useEffect } from "react";
import { fetchCharacters } from "../store";
import { connect } from "react-redux";

const Characters = (props) => {
  useEffect(() => {
    props.fetchCharacters();
  }, []);
  console.log(props.characters);
  return (
    <div>
      <h2>Characters from Naruto!</h2>
      {props.isLoading ? <h4>Loading characters now...</h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}>
          Uh oh... something happened 😟 {props.error}
        </p>
      ) : null}
      {props.characters.length > 0 ? (
        <div>
          {props.characters.map((character) => (
            <div>
              <h2 key={character.mal_id}>{character.name}</h2>
              <img src={character.image_url} alt={'mugshot of character'}/>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(Characters);
