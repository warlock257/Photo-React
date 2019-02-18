import React, { Component} from 'react';

export default class Sidebar3 extends Component {


    
    render(){
    //this.props.updateCatCount()

    return(
        <div className="sidebar">

            <p>Total number of pictures received:</p>
            <h2>{this.props.totalPhotos}</h2>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.chronoPhotos}</p>
                <p className="checkContainer__heading">Chronological:</p>
                <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.famPhotos}</p>
                <p className="checkContainer__heading">Family: </p>
                <input type="checkbox"  />
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.extPhotos}</p>
                <p className="checkContainer__heading">Extended: </p>
                <input type="checkbox" />
            </div>

            <hr />
                <div className="checkContainer">
                    <p className="checkContainer__count">{this.props.friendsPhotos}</p>
                    <p className="checkContainer__heading">Friends: </p>
                    <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.funPhotos}</p>
                <p className="checkContainer__heading">Fun: </p>
                <input type="checkbox" />
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.unsortedPhotoed}</p>
                <p className="checkContainer__heading">Unsorted: </p>        
                <input type="checkbox" />
            </div>

        </div>
    )}
}
