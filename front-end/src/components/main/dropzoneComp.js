import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';
	
class DropzoneComp extends Component {
  constructor(props) {
    super(props);
    this.state ={
        file: null,
    };
}
  
    onImageDrop = (ev, acceptedFiles) => {
      // const data = new FormData();
      // for (let i = 0; i < acceptedFiles.length; i += 1) {
      //   data.append('file', acceptedFiles[i]);
      // }

      //ev.preventDefault();
      const formData = new FormData();
      formData.append('myImage',this.state.file);

      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };

      axios.post("http://localhost:8080/upload",formData,config)
      .then((res) => {
          console.log("The file is successfully uploaded");
          console.log(res.data)
          this.props.uploading();
      }).catch((err) => {
          console.log(err)
      });
    }

    onChange = (ev) => {
      this.setState({file:ev.target.files[0]});
  }
  
    render() {
      return (
        <div>
          <Dropzone className="dropzone"
            multiple  onChange={this.onChange} onDrop={this.onImageDrop} >
            <p className="dropzone-text">Drop images or click to select files to upload</p>
          </Dropzone>
        </div>
      );
    }
  }
  
  export default DropzoneComp;