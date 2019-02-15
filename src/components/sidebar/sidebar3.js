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

            <div className="checkContainer">
                <p>Chronological:</p>
                <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p>Family: </p>
                <input type="checkbox"  />
            </div>
            <hr />

            <div className="checkContainer">
                <p>Extended: </p>
                <input type="checkbox" />
            </div>

            <hr />
                <div className="checkContainer">
                    <p>Friends: </p>
                    <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p>Fun: </p>
                <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p>Unsorted: </p>        
                <input type="checkbox" />
            </div>

        </div>
    )}
}
