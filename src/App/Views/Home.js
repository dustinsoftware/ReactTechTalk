import React from 'react';
import GifResult from './GifResult.js';
import { markdown } from 'markdown';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.slides = [
      
`# Dustin's Intro to ReactJS`,

`# Thanks for having me!`,

`# Topics to cover

 * React basics
 * Toolchain basics
 * Building a gif search panel`,
  
`# React basics
## React is a library, *not* a framework
 * You can easily port parts of your app over
 * Primarily responsible for the view
 * Can take a dependency on other libraries to handle routing, storage of application state, etc.
 * React is not a silver bullet, in some cases it may be better to stick to what you've got instead of introducing another library`,

`# The biggest win?
## Very easy to build UI and manage UI state`,

`# Other nice wins

 * Sanitization out of the box
 * Server side rendering
 * Easy ASP.NET MVC integration`,

`# Have you ever tried to JQuery?`,

`# How about when there was lots of UI manipulation?`,

`# DOM Manipulation is hard`,

`# What is an application, really?`,

`# Application container
 * Widget
    * Slider on widget
    * Another slider
 * Widget
    * Button
`,

`# Component
 * Component
  * Component
  * Component
 * Component
  * Component
`,

`# Javascript and HTML, in the same component

 * ES6 modules have fixed dependency woes in Javascript
   * \`var jquery = window.jQuery\` → \`import jQuery from 'jquery'\`
 * Makes it very easy to see how the HTML updates when state or props change
 * Components can be self-contained`,

`# Every component has its own state and props

## State: mutable
## Props: immutable`,

`# Example

    <GifResult staticImage={this.state.currentImage.static} animatedImage={this.state.currentImage.animated} />
    
## staticImage and animatedImage are props`,

`# Call setState to update the component and its children

 * This is where the magic happens
 * React will compute the new tree by rendering virtual DOM nodes and diffing against the real DOM
 * Re-render will not trigger without setState
`,

`# Don't mutate the rendered DOM!

 * Changes to the DOM will be thrown away, or could cause React to break in unexpected ways
 * Any updates to state will automatically trigger a re-render`,

`# Who owns the state?

 * That depends.
 * Containers own state, presentational components only use props
 * Single-page apps generally store the state in a global store`,

`# Toolchain basics`,

`![](http://fogsmoviereviews.files.wordpress.com/2011/07/wizardofoz5740.jpg)`,

`# Gulp`,
`# ESLint`,
`# Babel`,
`# Browserify / Webpack`,

`# Let's build a search panel!`
    ];
    
    this.state = {
      slideIndex: this.slides.length - 1
    };
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
        <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(this.slides[this.state.slideIndex])}} />

        <div style={{position: 'fixed', bottom: '0px'}}>
          <button style={{margin: '10px', fontSize: 'large'}} onClick={() => this.navigateSlide(-1)}>Previous</button>
          <button style={{margin: '10px', fontSize: 'large'}} onClick={() => this.navigateSlide(1)}>Next</button>
        </div>
      </div>
    );
  }
}
