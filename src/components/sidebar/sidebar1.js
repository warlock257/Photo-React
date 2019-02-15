import React, { Component} from 'react';

export default class Sidebar1 extends Component {
    constructor () {
      super()
      this.state = {
        
      }
    }

render(){
    return(
        <div className="sidebar ">

        <h3>Sign in Page </h3>

        <h4>Instructions</h4>
        <div className="sidebar1Text">
           <p>Enter your name, and click next</p>
           <p>If returning from a previous session, make sure the name entered, is the same</p>
            <p>You can navigate between the 5 pages with the circles above</p>
        </div>

        </div>
    )}
}
