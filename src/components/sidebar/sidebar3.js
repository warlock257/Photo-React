import React, { Component} from 'react';

export default class Sidebar3 extends Component {
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
        <br /><hr />

        <div className="row chrono">
            Chronological: <span className="blue-text"><strong>{this.props.chronoPhotos}</strong></span>
             <input type="checkbox" aria-label="Checkbox for following text input" />
         </div>

        <br /><hr />

        <div className="row family">
            Family: <span className="yellow-text"><strong>{this.props.famPhotos}</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
         <div className="row extended">
        Extended: <span className="green-text"><strong>{this.props.extPhotos}</strong></span>
      <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
            <div className="row friends">
                Friends: <span className="red-text"><strong>{this.props.friendsPhotos}</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
        <div className="row fun">
            Fun: <span className="pink-text"><strong>{this.props.funPhotos}</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
        <div className="row unsorted">
        <label htmlFor="unsorted"> Unsorted: <span className="black-text"><strong>{this.props.unsortedPhotos}</strong></span></label>
        <input type="checkbox" name="unsorted" aria-label="Checkbox for following text input" />
        </div>

        </div>
    )}
}
