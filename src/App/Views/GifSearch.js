import React from 'react';
import GifResult from './GifResult.js';

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }

  fetchGifs(searchTerm) {
    setTimeout(() => {
      this.setState({
        searchResults: [
          {
            animated: 'https://media.giphy.com/media/mzo0KpdmtnyCI/giphy.gif',
            static: 'https://media2.giphy.com/media/mzo0KpdmtnyCI/200_s.gif'
          },
          {
            animated: 'https://media.giphy.com/media/mzo0KpdmtnyCI/giphy.gif',
            static: 'https://media2.giphy.com/media/mzo0KpdmtnyCI/200_s.gif'
          },
          {
            animated: 'https://media.giphy.com/media/mzo0KpdmtnyCI/giphy.gif',
            static: 'https://media2.giphy.com/media/mzo0KpdmtnyCI/200_s.gif'
          },
        ]
      })
    }, 500);
  }

  renderSearchResult(result) {
    return (
      <GifResult staticImage={result.static} animatedImage={result.animated} />
    );
  }

  render() {
    return (
      <div>
        <h1>Gif search demo!</h1>

        <ul>
          {this.state.searchResults.map(this.renderSearchResult)}
        </ul>

        <button onClick={() => this.fetchGifs()}>Search for gifs</button>

        {this.state.searchResults.length === 0 ? 'No images found' : null}
      </div>
    );
  }
}
