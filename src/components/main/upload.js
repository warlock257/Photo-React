import React, { Component} from 'react';
import dummyData from '../dummyData';

export default class Main2Upload extends Component {

    render () {

      let images = dummyData.map(image => {
        return (
            <div id={image.number} class="draggableImg"> 
                <img key={image.number} src={image.awsUrl} alt="" className="img-responsive" />
            </div>
            )
     });
      return (
        <div className='upload'>
          <h3 className="upload__title">Upload page</h3>
          <form className="upload__form">
            <input type="file" name="pic" accept="image/*" />
            <input type="submit" className="upload__submitButton" />
          </form>

          <h3 className="upload__receivedTitle">Received Photos:</h3>
          <div className="receivedImages">
             {images}
          </div>
        
        </div>

      )
    }
  }



