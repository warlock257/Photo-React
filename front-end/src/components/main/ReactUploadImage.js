import React,{Component} from 'react'
const axios = require("axios");

class ReactUploadImage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: []
        };
    }

    onFormSubmit = (ev) =>{
        ev.preventDefault();
        for(let i = 0; i < this.state.file.length; i++ ){
            const formData = new FormData();
            formData.append('myImage',this.state.file[i]);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            axios.post("http://localhost:8080/uploads",formData,config)
                .then((res) => {
                    //console.log("The file is successfully uploaded");
                    //console.log(res.data)
                    this.props.uploading();
                }).catch((err) => {
                    console.log(err)
            });
        }
    }

    onChange = (ev) => {
        this.setState({file:ev.target.files});
    }

    render() {
        return (
            <div className="upload-buttons">
                <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
                    <label htmlFor="chooseFiles">Choose files ->
                    <input type="file" className="chooseFiles" id="chooseFiles" multiple name='myImage' onChange= {this.onChange} />
                    </label>
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }
}

export default ReactUploadImage