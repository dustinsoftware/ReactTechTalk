import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <MenuItem route="app" text="Slide deck" />
          <MenuItem route="gifs" text="Gif search" />
        </ul>
      </header>
    );
  }
}

module.exports = Menu;
