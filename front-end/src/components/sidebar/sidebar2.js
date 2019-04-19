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

        <h3 className="sidebar2Heading">Upload Page </h3>

        <div className="sidebar2Text">
            <p>Click "Choose files", then click "Upload". This can be done multiple times.</p>
            <p>Make sure you see all your photos before proceeding.</p>
            <p>Larger files may take longer to appear on screen</p>
        </div>

        <p className="sidebar2Text sidebar2Text-numberOf ">Number of pictures received:</p>
        <h2>{this.props.uploadedImgs.length}</h2>

        <button className="back-button" onClick={this.props.signInClick}>Back</button>
        <button className="next-button" onClick={this.props.catClick}>Next</button>

        </div>
    )}
}
