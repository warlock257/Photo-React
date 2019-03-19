import React, { Component} from 'react';

export default class Main3Cat extends Component {
    constructor () {
      super()
      this.state = {
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
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'chrono'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
    }
    onDropFamily = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'family'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
    }
    onDropExtended = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'extended'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
    }
    onDropFriends = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'friends'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
    }
    onDropFun = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'fun'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
    }
    onDropUnsorted = (ev) => {
        ev.preventDefault();
        const copy = Array.from(this.props.uploadedImgs)
        copy[this.currentId].category = 'unsorted'
        this.props.updateCatState(copy);
        this.props.updateCatCount();
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

    let imageArray = this.props.uploadedImgs.map((object, index) =>{

    if (this.props.uploadedImgs[index].category === 'unsorted'){
        borderColor = unsortedBorder;
    } else if (this.props.uploadedImgs[index].category === 'chrono'){
        borderColor = chronoBorder;
    } else if (this.props.uploadedImgs[index].category === 'family'){
        borderColor = familyBorder;
    } else if (this.props.uploadedImgs[index].category === 'extended'){
        borderColor = extBorder;
    } else if (this.props.uploadedImgs[index].category === 'friends'){
        borderColor = friendsBorder;
    } else if (this.props.uploadedImgs[index].category === 'fun'){
        borderColor = funBorder;
    }
    //console.log(this.props.uploadedImgs)
    return (
        <div key={this.props.uploadedImgs[index].number} id={this.props.uploadedImgs[index].number} draggable="true" onDragStart={this.onDragOver}  className="draggableImg" style={borderColor} > 
            <img  src={this.props.uploadedImgs[index].imgLocalUrl}  id={this.props.uploadedImgs[index].number} alt="" className="img-responsive draggableImgImg" />
        </div>
        )
    })
    
      return (
        <div className="catagorySection">
        <h3>Drag your photos onto the coloured boxes to set a category</h3>
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