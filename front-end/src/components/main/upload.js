import React, { Component} from 'react';
import axios from 'axios'
import UploadImage from './ReactUploadImage';
//import DropzoneComp from './dropzoneComp'

export default class Main2Upload extends Component {
  constructor(){
    super()
    this.uploadForm = React.createRef;
  }

// postImg = (ev) =>{
//   ev.preventDefault()

//   const axConfig = {
//     "method":"POST",
//     "url":`/profile/`,
//     "data":{
//         "imgName":ev.target.pic.value,
//     },
//     headers:{
//         'content-type':'application/json'
//     }
//   }
//   axios.post(axConfig)
//   .then((res)=>{
//     //console.log(res.data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// }

componentDidMount(){
  axios.get('/getPics')
  .then((res) =>{
    this.props.updateUploadedImgs(res.data);
  })
  .catch((err) =>{
    console.log(err)
  })
}

componentDidUpdate(){
  axios.get('/getPics')
  .then((res) =>{
    if(res.data.length !== this.props.uploadedImgs.length){
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
    url:"/deletePic",
    data:{
      file:ev.target.id
    },
    headers:{
      'content-type':'application/json'
    }
  }
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
      let images = this.props.uploadedImgs.map(image => {
        return (
            <div id={image.number} key={image.number} className="draggableImg"> 
                <img key={image.imgLocalUrl} src={image.imgLocalUrl} alt="" className="img-responsive draggableImgImg" />
                <img className="trash" src="trash-2.svg" alt="trash icon" id={image.originalFilename} onClick={this.deletePic}/>
            </div>
            )
     });
      return (
        <div className='upload'>
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
