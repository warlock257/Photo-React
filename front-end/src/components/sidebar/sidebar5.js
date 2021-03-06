import React, { Component} from 'react';

export default class Sidebar4 extends Component {
    constructor () {
      super()
      this.state = {
        
      }
    }

render(){
    return(
        <div className="sidebar sidebar5">

        <h2>Nearly Done!</h2>
        <p className="complete__Instructions">Click the buttons to either start over from scratch,
        or notify the company that you are done. You'll be able to add a note to your submission
        if you wish.</p>
            <br />
        <p className="complete__Instructions">Total number of files in each category:</p>

    <div className="complete__count">
        <div className="checkContainer">
                <p className="checkContainer__count">{this.props.chronoArray.length}</p>
                <p className="checkContainer__heading">Chronological</p>
            </div>
            <hr />
            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.familyArray.length}</p>
                <p className="checkContainer__heading">Family</p>
            </div>
            <hr />
            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.extArray.length}</p>
                <p className="checkContainer__heading">Extended</p>
            </div>
            <hr />
                <div className="checkContainer">
                    <p className="checkContainer__count">{this.props.friendsArray.length}</p>
                    <p className="checkContainer__heading">Friends</p>
            </div>
            <hr />
            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.funArray.length}</p>
                <p className="checkContainer__heading">Fun</p>
            </div>
            <hr />
            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.unsortedArray.length}</p>
                <p className="checkContainer__heading">Unsorted</p>        
            </div>
        </div>
    </div>
    )}
}
