import React, { Component} from 'react';

export default class Main3Cat extends Component {
    constructor () {
      super()
      this.state = {
        border: 'unsortedBorder'
      }
    }

    onDragOver = (ev) => {
        console.log('dragging');
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        console.log('drop');
    }

    render () {
      return (
        <div className='catMain'>
            <div className="row">

            <div id="droppable-chrono" className="droppable ui-widget-header chrono-box"
            onDragOver={(e) =>this.onDragOver(e)}
            onDrop={(e) =>{this.onDrop(e, "chrono")}}>
            <p>Chronological</p>
            </div>

            <div id="droppable-family" className="droppable ui-widget-header family-box">
            <p>Family</p>
            </div>

            <div id="droppable-extended" className="droppable ui-widget-header extended-box">
            <p>Extended</p>
            </div>

            <div id="droppable-friends" className="droppable ui-widget-header friends-box">
                <p>Friends</p>
            </div>

            <div id="droppable-fun" className="droppable ui-widget-header fun-box">
                <p>Fun</p>
            </div>

            <div id="droppable-unsorted" className="droppable ui-widget-header unsorted-box">
                <p>Unsorted</p>
            </div>

            </div>

            <br />

            <div className="row">
            <div id="draggable" draggable className="ui-widget-content picFrame unsortedBorder"> </div>
            </div>
        </div>




      )
    }
  }



