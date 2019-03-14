import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';
	
class DropzoneComp extends Component {
    constructor() {
      super();
    }
  
    onImageDrop = (acceptedFiles) => {
      const data = new FormData();
      for (let i = 0; i < acceptedFiles.length; i += 1) {
        data.append('file', acceptedFiles[i]);
      }

      let axConfig = {
        url:'http://localhost:8080/upload',
        'method':'post',
        'data':data,
        'processData': false,
        'contentType': false,
        headers:{
          'content-type':'application/json'
        }
      }

      axios.post(axConfig)
      .then((res) =>{
        console.log(res.data)
      })
      .catch((err) =>{
          console.log(err)
      })
  
    }
  
    render() {
      return (
        <div>
          <Dropzone className="dropzone"
            multiple
            onDrop={this.onImageDrop}
          >
            <p class="dropzone-text">Drop images or click to select files to upload</p>
          </Dropzone>
        </div>
      );
    }
  }
  
  export default DropzoneComp;