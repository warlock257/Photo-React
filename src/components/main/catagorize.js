import React, { Component} from 'react';
import dummyData from '../dummyData';

export default class Main3Cat extends Component {
    constructor () {
      super()
      this.state = {
        dummydata:dummyData,  
        currentId: 0
      }
      this.currentId = 'default';
    }

    allowDrop =(ev) => {
        ev.preventDefault();
      }

    onDragOver = (ev) => {
        this.currentId = ev.target.attributes.id.value;
    }

    onDropChrono = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'chrono'
        this.setState({ dummydata:copy })
    }
    onDropFamily = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'family'
        this.setState({ dummydata:copy })
    }
    onDropExtended = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'extended'
        this.setState({ dummydata:copy })
    }
    onDropFriends = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'friends'
        this.setState({ dummydata:copy })
    }
    onDropFun = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'fun'
        this.setState({ dummydata:copy })
    }
    onDropUnsorted = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.state.dummydata)
        copy[this.currentId].catagory = 'unsorted'
        this.setState({ dummydata:copy })
    }

      render () {

    var chronoBorder = {
        backgroundColor:'#000dff',
        overflow:'hidden'
    };
    var familyBorder = {
        backgroundColor:'#d0d700',
        overflow:'hidden'
    };
    var extBorder = {
        backgroundColor:'#089f00',
        overflow:'hidden'
    };
    var friendsBorder = {
        backgroundColor:'#b50926',
        overflow:'hidden'
    };
    var funBorder = {
        backgroundColor:'#e304b7',
        overflow:'hidden'
    };
    var unsortedBorder = {
        backgroundColor:'black',
        overflow:'hidden'
    };
    var borderColor = {
        backgroundColor:'black',
        overflow:'hidden'
    };

    let imageArray = dummyData.map((object, index) =>{

    if (dummyData[index].catagory === 'unsorted'){
        borderColor = unsortedBorder;
    } else if (dummyData[index].catagory === 'chrono'){
        borderColor = chronoBorder;
    } else if (dummyData[index].catagory === 'family'){
        borderColor = familyBorder;
    } else if (dummyData[index].catagory === 'extended'){
        borderColor = extBorder;
    } else if (dummyData[index].catagory === 'friends'){
        borderColor = friendsBorder;
    } else if (dummyData[index].catagory === 'fun'){
        borderColor = funBorder;
    }

    return (
        <div key={dummyData[index].number} id={dummyData[index].number} draggable="true" onDragStart={this.onDragOver}  className="draggableImg" style={borderColor} > 
            <img  src={dummyData[index].awsUrl}  id={dummyData[index].number} alt="" className="img-responsive" />
        </div>
        )
    })
    
      return (
        <div className="catagorySection">
            <div className='catMain'>

                    <div id="droppable-chrono" className="droppable ui-widget-header chrono-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropChrono} >
                    <p>Chronological</p>
                    </div>
                    
                    <div id="droppable-family" className="droppable ui-widget-header family-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropFamily}>
                    <p>Family</p>
                    </div>

                    <div id="droppable-extended" className="droppable ui-widget-header extended-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropExtended}>
                    <p>Extended</p>
                    </div>

                    <div id="droppable-friends" className="droppable ui-widget-header friends-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropFriends}>
                        <p>Friends</p>
                    </div>

                    <div id="droppable-fun" className="droppable ui-widget-header fun-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropFun}>
                        <p>Fun</p>
                    </div>

                    <div id="droppable-unsorted" className="droppable ui-widget-header unsorted-box"
                    onDragOver={this.allowDrop}
                    onDrop={this.onDropUnsorted}>
                        <p>Unsorted</p>
                    </div>
            </div>

                <div className="imageArea">
                    { imageArray }
                </div>
        </div>
 
      )
    }
  }