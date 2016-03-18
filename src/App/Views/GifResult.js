import React from 'react';

export default class GifResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false
    };
  }

  setIsHovering() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  render() {
    return (
      <div onClick={() => this.setIsHovering()}>
        Search result: <img src={this.state.isHovering ? this.props.animatedImage : this.props.staticImage} style={{ width: '240px' }} />
      </div>
    );
  }
}
