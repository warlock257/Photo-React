import React, { Component} from 'react';

export default class Sidebar4 extends Component {
    constructor () {
      super()
      this.state = {
        
      }
    }

render(){
    return(
        <div className="sidebar">

        <h3>Order Page </h3>
        <span className="radioLabel">Chronological</span><input type="radio" name="chrono" value="chrono" />
        <br />
        <span className="radioLabel">Family</span><input type="radio" name="family" value="family" />
 
        </div>
    )}
}
