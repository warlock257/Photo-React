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

        <h3>Upload Page </h3>

        <h4>Instructions</h4>
        <div className="sidebar2Text">
            <p>Drag Images in to the box, or click it to choose a file</p>
        </div>

        <p>Number of pictures received:</p>
        <h2>{this.props.uploadedImgs.length}</h2>

        <button className="back-button">Back</button>
        <button className="next-button" onClick={this.props.catClick}>Next</button>

        </div>
    )}
}
