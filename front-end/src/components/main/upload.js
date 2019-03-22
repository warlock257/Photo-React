import React, { Component} from 'react';
import axios from 'axios'
//import dummyData from '../dummyData';
import UploadImage from './ReactUploadImage';
import DropzoneComp from './dropzoneComp'

export default class Main2Upload extends Component {
  constructor(){
    super()
    this.uploadForm = React.createRef;
    //this.uploadedImgs = []
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

componentDidMount(){
  //console.log("upload did mount")
  //console.log(this.props.uploadedImgs)
  axios.get('http://localhost:8080/getPics')
  .then((res) =>{
    //console.log(res.data)
    this.props.updateUploadedImgs(res.data);
  })
  .catch((err) =>{
    console.log(err)
  })
}

componentDidUpdate(){
  // console.log("upload did update")
  // console.log(this.props.uploadedImgs)
  axios.get('http://localhost:8080/getPics')
  .then((res) =>{
    if(res.data.length !== this.props.uploadedImgs.length){
      //console.log(res.data)
      //console.log(this.props.uploadedImgs)
      this.props.updateUploadedImgs(res.data);
    }
  })
  .catch((err) =>{
    console.log(err)
  })
}

deletePic =(ev) =>{
  let axConfig = {
    method:"delete",
    url:"http://localhost:8080/deletePic",
    data:{
      file:ev.target.id
    },
    headers:{
      'content-type':'application/json'
    }
  }
  //console.log(deleteObj)
  axios(axConfig)
  .then((res)=>{
    console.log(res)
    //REFRESH PAGE
    this.forceUpdate()
  })
  .catch((err) =>{
    console.log(err)
  })
}



    render () {
      //console.log(this.props.uploadedImgs);
      let images = this.props.uploadedImgs.map(image => {
        return (
            <div id={image.number} className="draggableImg"> 
                <img key={image.number} src={image.imgLocalUrl} alt="" className="img-responsive draggableImgImg" />
                <img className="trash" src="trash-2.svg" alt="trash icon" id={image.originalFilename} onClick={this.deletePic}/>
            </div>
            )
     });
      return (
        <div className='upload'>
          {/* <h3 className="upload__title">Upload page</h3> */}

          {/* <DropzoneComp userName={this.props.name}
                       uploading={this.props.uploading}/> */}
          <UploadImage userName={this.props.name}
                       uploading={this.props.uploading} />

          <h3 className="upload__receivedTitle">Received Photos:</h3>
          <div className="receivedImages">
             {images}
          </div>
        
        </div>

      )
    }
  }



//   <form className="upload__form" encType="multipart/form-data" onSubmit={this.postImg} ref={this.uploadForm}>
//   <input type="file" multiple name="pic" accept="image/*" className="upload__chooseButton" />
//   <select className="preSelectCat" name="preSelectCat">
//     <option>--no category--</option>
//     <option>Chronological</option>
//     <option>Family</option>
//     <option>Extended Family</option>
//     <option>Friends</option>
//     <option>Fun</option>
//   </select>
//   <input type="submit" className="upload__submitButton" />
// </form>