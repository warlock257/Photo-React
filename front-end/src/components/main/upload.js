import React, { Component} from 'react';
import axios from 'axios'
import dummyData from '../dummyData';

export default class Main2Upload extends Component {
  constructor(){
    super()
    this.uploadForm = React.createRef;
  }

postImg = (ev) =>{
  ev.preventDefault()
  //console.log(this.uploadForm.current.pic)
  console.log(ev.target.pic.value)

  const axConfig = {
    "method":"POST",
    "url":`localhost:8080/profile/`,
    "data":{
        "imgName":ev.target.pic.value,
    },
    headers:{
        'content-type':'application/json'
    }
  }

  axios.post(axConfig)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}


    render () {

      let images = dummyData.map(image => {
        return (
            <div id={image.number} className="draggableImg"> 
                <img key={image.number} src={image.awsUrl} alt="" className="img-responsive" />
            </div>
            )
     });
      return (
        <div className='upload'>
          <h3 className="upload__title">Upload page</h3>

          <form className="upload__form" encType="multipart/form-data" onSubmit={this.postImg} ref={this.uploadForm}>
            <input type="file" multiple name="pic" accept="image/*" />
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



