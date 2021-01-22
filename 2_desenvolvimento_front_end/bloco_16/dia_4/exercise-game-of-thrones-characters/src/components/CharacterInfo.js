import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { loading, error, character } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character[0].name}</li>
          <li>Gender: {character[0].gender}</li>
          <li>Aliases: {character[0].aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character[0].books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};


const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  character: state.persona,
});

CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  character: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default connect(mapStateToProps, null)(CharacterInfo);

