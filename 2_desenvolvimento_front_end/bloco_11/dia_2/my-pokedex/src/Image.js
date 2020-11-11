import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const image = this.props.image;
    return <img src={image} alt="" />;
  }
}

Image.protoTypes = {
  image: PropTypes.string,  
}

export default Image;