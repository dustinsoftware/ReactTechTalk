import React from 'react';
import GifResult from './GifResult.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    };

    this.slides = [
      (
        <h1>Dustin's Intro to ReactJS</h1>
      ),
      (
        <div>
          <h1>Thanks for having me!</h1>
          <p>This should be a fun talk.</p>
        </div>
      ),
      (
        <div>
        <h1><a id="What_well_be_covering_0"></a>What we’ll be covering</h1>
<ul>
<li>What is a React</li>
<li>Component basics</li>
<li></li>
</ul>
<h1><a id="What_we_probably_wont_be_covering_in_depth_6"></a>What we (probably) won’t be covering in depth</h1>
<ul>
<li>Edge cases</li>
<li>Complicated datastores (Redux, Flux, etc)</li>
<li>Module bundling</li>
<li></li>
</ul>
        </div>
      )
    ];
  }

  navigateSlide(offset) {
    const newIndex = this.state.slideIndex + offset;
    if (newIndex >= 0 && newIndex < this.slides.length) {
       this.setState({
        slideIndex: newIndex
      });
    }
  }

  render() {
    return (
      <div>
        {this.slides[this.state.slideIndex]}

        <div style={{position: 'fixed', bottom: '0px'}}>
          <button style={{margin: '10px', fontSize: 'large'}} onClick={() => this.navigateSlide(-1)}>Previous</button>
          <button style={{margin: '10px', fontSize: 'large'}} onClick={() => this.navigateSlide(1)}>Next</button>
        </div>
      </div>
    );
  }
}
