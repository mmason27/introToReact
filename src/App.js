import React, { Component } from 'react';
import './App.css'

import Feature from './Feature'
import Article from './Article'
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="allContent">
        <Menu></Menu>
        <Feature></Feature>
        <Article title="Hello WatchKit" body="Praesent tincidunt non dui quis pharetra. Nunc cursus arcu tortor, id feugiat leo maximus vel. Donec in lobortis enim. Aliquam elementum non felis nec bibendum. Phasellus dignissim vitae elit et malesuada. Ut aliquet sapien a diam volutpat porta. Suspendisse quam sapien, convallis nec commodo blandit, pellentesque in lectus." comments="12" likes="124" ></Article>

        <Article title="Introduction to Swift" body="Proin finibus massa nibh, eget convallis lectus varius in. Integer ante nibh, rutrum sit amet velit id, finibus aliquam risus. Curabitur dictum a lorem non dapibus. Aenean quis leo scelerisque, commodo magna at, vulputate nunc. Nam eget arcu ornare, iaculis turpis vitae, commodo ligula. Aenean interdum odio nunc, vitae laoreet ante lacinia sit amet." comments="15" likes="45" ></Article>
      </div>
    )
  }
}

export default App