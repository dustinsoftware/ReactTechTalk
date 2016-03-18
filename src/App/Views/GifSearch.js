import React from 'react';
import GifResult from './GifResult.js';

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    };
  }

  fetchGifs() {
    const searchTerm = this.refs.searchbox.getDOMNode().value;
    this.setState({
      searchTerm
    });
    
    const apiKey = '';
    fetch(`//api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&rating=g`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          gifs: response.data
        })
      });
  }

  renderSearchResult(gif) {
    return (
      <GifResult staticImage={gif.images.downsized_still.url} animatedImage={gif.images.downsized.url} />
    );
  }

  render() {
    return (
      <div>
        <h1>Gif search demo!</h1>

        Search: <input type="text" ref="searchbox"/>
        <button onClick={() => this.fetchGifs()}>Search for gifs</button>
        <ul>
          {this.state.gifs.map(this.renderSearchResult)}
        </ul>

        {this.state.searchTerm != null && this.state.gifs.length === 0 ? 'No images found' : null}
      </div>
    );
  }
}
