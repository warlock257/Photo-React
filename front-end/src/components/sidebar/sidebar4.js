import React, { Component} from 'react';

export default class Sidebar4 extends Component {
    constructor () {
      super()
      this.state = {

      }
    }

radioChange = (ev) =>{
    this.props.orderFilter(ev.target.value);
}

completeClick = () =>{
    //move sorted into folders

    //rename files

    //zip sorted files and folders

    //change to pg 5
    this.props.completeClick()
}

render(){
    return(
        <div className="sidebar">
        <div className="orderInstructions">
            <h3>Order Page </h3>
            <p>Select a category to order, then drag images up and down to change their order.</p>
        </div>
            <div className="catSelector">
                <form onChange={this.radioChange}>
                    
                    <label className="radioLabel"> Chronological
                    <input type="radio" name="catSelect" value="chrono" defaultChecked />
                    </label>
                    <br />
                    <label className="radioLabel"> Family
                    <input type="radio" name="catSelect" value="family" />
                    </label>
                    <br />
                    <label className="radioLabel"> Extended Family
                    <input type="radio" name="catSelect" value="extended" />
                    </label>
                    <br />
                    <label className="radioLabel"> Friends
                    <input type="radio" name="catSelect" value="friends" />
                    </label>
                    <br />
                    <label className="radioLabel"> Fun
                    <input type="radio" name="catSelect" value="fun" />
                    </label>
                    <br />
                    <label className="radioLabel"> Unsorted
                    <input type="radio" name="catSelect" value="unsorted" />
                    </label>
                </form>
            </div>

            <button className="back-button" onClick={this.props.catClick}>Back</button>
            <button className="next-button" onClick={this.completeClick}>Next</button>

        </div>
    )}
}
