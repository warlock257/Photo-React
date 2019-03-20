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
            console.log(formData)
            formData.append('myImage',this.state.file[i]);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            axios.post("http://localhost:8080/uploads",formData,config)
                .then((res) => {
                    console.log("The file is successfully uploaded");
                    console.log(res.data)
                    this.props.uploading();
                }).catch((err) => {
                    console.log(err)
            });
        }
    }

    onChange = (ev) => {
        //console.log(ev.target.files)
        this.setState({file:ev.target.files});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} encType="multipart/form-data">

                <input type="file" multiple name='myImage' onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage