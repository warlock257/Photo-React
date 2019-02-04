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
        <h2>75</h2>
        <br /><hr />


        <div className="row chrono">
            Chronological: <span className="blue-text"><strong>20</strong></span>
             <input type="checkbox" aria-label="Checkbox for following text input" />
         </div>

        <br /><hr />

        <div className="row family">
            Family: <span className="yellow-text"><strong>20</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
         <div className="row extended">
        Extended: <span className="green-text"><strong>10</strong></span>
      <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
            <div className="row friends">
                Friends: <span className="red-text"><strong>15</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
        <div className="row fun">
            Fun: <span className="pink-text"><strong>10</strong></span>
            <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>

        <br /><hr />
        <div className="row unsorted">
        <label htmlFor="unsorted"> Unsorted: <span className="black-text"><strong>10</strong></span></label>
        <input type="checkbox" name="unsorted" aria-label="Checkbox for following text input" />
        </div>

        </div>
    )}
}
