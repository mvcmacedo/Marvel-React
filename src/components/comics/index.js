import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';
import { Creators as CharactersActions } from '../../store/ducks/characters';

class Comics extends Component {
  handleDescription = (character) => {
    const {
      characters: { data },
    } = this.props;

    const findCharacter = data.find(char => char.id === character.id);
    findCharacter.showDescription = true;
    const updatedCharacters = [...data, findCharacter];

    this.setState({ characters: { data: updatedCharacters, loading: false, error: null } });
  };

  render() {
    const { characters } = this.props;

    return (
      <Container characters={characters.data}>
        {characters.data.map(character => (
          <Repository key={character.id}>
            <header>
              <img src={character.avatar} alt="hero-logo" />
              <strong>{character.name}</strong>
            </header>
            <ul>
              <li onMouseOver={e => this.handleDescription(character)}>
                <small>Description:</small>
                {character.showDescription ? character.description : 'Pass here.'}
              </li>
              <li>
                <small>Stories:</small>
                {`${character.stories} `}
              </li>
              <li>
                <small>Events:</small>
                {`${character.events} `}
              </li>
              <li>
                <small>Comics:</small>
                {`${character.comics} `}
              </li>
              <li>
                <small>Series:</small>
                {`${character.series} `}
              </li>
            </ul>
          </Repository>
        ))}
      </Container>
    );
  }
}

Comics.propTypes = {
  characters: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stories: PropTypes.number.isRequired,
        events: PropTypes.number.isRequired,
        series: PropTypes.number.isRequired,
        comics: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CharactersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comics);
