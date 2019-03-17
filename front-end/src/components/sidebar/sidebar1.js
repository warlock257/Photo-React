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

        <h2 className="sidebar-heading">Instructions</h2>
        <div className="sidebar1Text">
           <p>Enter your last name, and click next</p>
           <p>If returning from a previous session, make sure the name entered, is the same</p>
        </div>

        </div>
    )}
}
