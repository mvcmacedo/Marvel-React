import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container, Form } from './styles';
import { Creators as CharactersActions } from '../../store/ducks/characters';

class Input extends Component {
  static propTypes = {
    addCharacterRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    characterName: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { addCharacterRequest } = this.props;

    const { characterName } = this.state;

    await addCharacterRequest(characterName);

    this.setState({ characterName: '' });
  };

  render() {
    const { characterName } = this.state;
    const { loading } = this.props;

    return (
      <Container>
        <Form method="POST" onSubmit={this.handleSubmit}>
          <input
            placeholder="Type a hero name"
            value={characterName}
            onChange={e => this.setState({ characterName: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Search'}
          </button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ characters }) => ({
  characters,
  loading: characters.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CharactersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
