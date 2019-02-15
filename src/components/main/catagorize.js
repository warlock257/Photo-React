import React, { Component} from 'react';
import dummyData from '../dummyData';

export default class Main3Cat extends Component {
    constructor () {
      super()
      this.state = {
        border: 'unsortedBorder',
        currentCat: 'unsorted'
      }

    }

    onDragOver = (ev, cat) => {
        ev.preventDefault();
        //console.log('DRAGGING ev: '+ ev + ' cat: ' + cat);
        this.setState({currentCat: cat});
    }

    onDropChrono = (ev) => {
        console.dir(ev.target)
        
        //dummyData[0].catagory = "Chrono"
        

        //console.log("drop event: "+ ev.target)
        //console.log('DROP ev: '+ ev.number + ' cat: ' + cat);
        //console.log('current catagory state: '+ this.state.currentCat);
        //console.log(images.originalFilename)
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


    let images = dummyData.map(image => {
        for (var i = 0; i < dummyData.length; i++){
            if (dummyData[i].catagory === 'unsorted'){
                //console.log(dummyData[i].catagory);
                borderColor = unsortedBorder;
            } else if (dummyData[i].catagory === 'chrono'){
                console.log(dummyData[i].catagory);
                borderColor = chronoBorder;
            } else if (dummyData[i].catagory === 'family'){
                console.log(dummyData[i].catagory);
                borderColor = familyBorder;
            } else if (dummyData[i].catagory === 'extended'){
                console.log(dummyData[i].catagory);
                borderColor = extBorder;
            } else if (dummyData[i].catagory === 'friends'){
                console.log(dummyData[i].catagory);
                borderColor = friendsBorder;
            } else if (dummyData[i].catagory === 'fun'){
                console.log(dummyData[i].catagory);
                borderColor = funBorder;
            }
        }
        
        return (
            <div id={image.number} key={image.number} draggable className="draggableImg" > 
                <img src={image.awsUrl} alt="" className="img-responsive" />
            </div>
            )
     });

     
      return (
        <div className="catagorySection">
            <div className='catMain'>

                    <div id="droppable-chrono" className="droppable ui-widget-header chrono-box"
                    onDragOver={(e) =>this.onDragOver(e, "chrono")}
                    onDrop={this.onDropChrono}   >
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

                <div className="imageArea">
                    { images }
                </div>
        </div>
        




      )
    }
  }