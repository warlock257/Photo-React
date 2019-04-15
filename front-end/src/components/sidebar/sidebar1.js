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
           <p>You will proceed through 5 stages:</p>
           <ol>
               <li>Sign in with your last name</li>
               <li>Upload your photos</li>
               <li>Sort your photos into categories</li>
               <li>Order your photos within each category</li>
               <li>Notify the company</li>
           </ol>
        </div>

        </div>
    )}
}
