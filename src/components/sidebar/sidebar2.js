import React, { Component} from 'react';

export default class Sidebar2 extends Component {
    constructor () {
      super()
      this.state = {
        
      }
    }

render(){
    return(
        <div className="sidebar">

        <p>Number of pictures received:</p>
        <h2>{this.props.totalPhotos}</h2>

        </div>
    )}
}
