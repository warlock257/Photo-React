import React, { Component} from 'react';

export default class Sidebar3 extends Component {

    on3Next = () =>{
        //filer master array by category, making 6 new arrays
        function isChrono(item){
            if(item.category === "chrono"){
                return true
            } else{
                return false
            }
        }
        let chronoArray = this.props.uploadedImgs.filter(isChrono)

        function isFamily(item){
            if(item.category === "family"){
                return true
            } else{
                return false
            }
        }
        let familyArray = this.props.uploadedImgs.filter(isFamily)

        function isExt(item){
            if(item.category === "extended"){
                return true
            } else{
                return false
            }
        }
        let extArray = this.props.uploadedImgs.filter(isExt)

        function isfriend(item){
            if(item.category === "friends"){
                return true
            } else{
                return false
            }
        }
        let friendsArray = this.props.uploadedImgs.filter(isfriend)

        function isfun(item){
            if(item.category === "fun"){
                return true
            } else{
                return false
            }
        }
        let funArray = this.props.uploadedImgs.filter(isfun)

        function isUnsorted(item){
            if(item.category === "unsorted"){
                return true
            } else{
                return false
            }
        }
        let unsortedArray = this.props.uploadedImgs.filter(isUnsorted)

        //load each category array into state
        this.props.updateCategoryArrays(chronoArray,familyArray,extArray,friendsArray,funArray,unsortedArray)

        //change the page to 4
        this.props.orderClick();
    }
    
    render(){

    return(
        <div className="sidebar">

            <p className="total3">Total number of pictures received:</p>
            <h2>{this.props.uploadedImgs.length}</h2>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.chronoPhotos}</p>
                <p className="checkContainer__heading">Chronological</p>
                
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.famPhotos}</p>
                <p className="checkContainer__heading">Family</p>
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.extPhotos}</p>
                <p className="checkContainer__heading">Extended</p>
            </div>

            <hr />
                <div className="checkContainer">
                    <p className="checkContainer__count">{this.props.friendsPhotos}</p>
                    <p className="checkContainer__heading">Friends</p>
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.funPhotos}</p>
                <p className="checkContainer__heading">Fun</p>
            </div>
            <hr />

            <div className="checkContainer">
                <p className="checkContainer__count">{this.props.unsortedPhotoed}</p>
                <p className="checkContainer__heading">Unsorted</p>        
            </div>
        <br />
        <button className="back-button" onClick={this.props.uploadClick}>Back</button>
        <button className="next-button" onClick={this.on3Next}>Next</button>

        </div>
    )}
}
