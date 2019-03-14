import React,{Component} from 'react'
const axios = require("axios");

class ReactUploadImage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
    }

    onFormSubmit = (ev) =>{
        ev.preventDefault();
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
            }).catch((err) => {
                console.log(err)
        });
    }

    onChange = (ev) => {
        this.setState({file:ev.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>

                <input type="file" multiple name='myImage' onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage