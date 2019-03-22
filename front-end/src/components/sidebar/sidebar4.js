import React, { Component} from 'react';
import axios from 'axios'

export default class Sidebar4 extends Component {
    constructor () {
      super()
      this.state = {

      }
    }

radioChange = (ev) =>{
    this.props.orderFilter(ev.target.value);
}

completeClick = () =>{
    console.log(this.props.chronoArray)
    //send request to move sorted into folders
    if(this.props.chronoArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.chronoArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    if(this.props.familyArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.familyArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    if(this.props.extArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.extArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    if(this.props.friendsArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.friendsArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    if(this.props.funArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.funArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    if(this.props.unsortedArray.length !== 0){
    const axConfig = {
        method:"POST",
        url:"http://localhost:8080/process/",
        data: this.props.unsortedArray,
        headers:{
            'Content-Type':'application/json'
        }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }


    //zip sorted files and folders, get returned url
    let zipUserName = this.props.name;
    console.log(zipUserName);
    let zipConfig = {
      method:"POST",
      url:"http://localhost:8080/zip",
      data: {
        userName:zipUserName
      },
      headers:{
          'Content-Type':'application/json'
      }
    }
    axios(zipConfig)
    .then((res)=>{
      console.log("returned URL: " + res.data)
      this.props.getZipUrl(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })


    //change to pg 5
    this.props.completeClick()
}

render(){
    return(
        <div className="sidebar">
        <div className="orderInstructions">
            <h3>Order Page </h3>
            <p>Select a category to order, then drag images up and down to change their order.</p>
        </div>
            <div className="catSelector md-radio" >
                <form onChange={this.radioChange}>
                    
                    <label className="radioLabel"> Chronological
                    <input type="radio" name="catSelect" value="chrono" defaultChecked />
                    </label>
                    <hr />
                    <label className="radioLabel"> Family
                    <input type="radio" name="catSelect" value="family" />
                    </label>
                    <hr />
                    <label className="radioLabel"> Extended Family
                    <input type="radio" name="catSelect" value="extended" />
                    </label>
                    <hr />
                    <label className="radioLabel"> Friends
                    <input type="radio" name="catSelect" value="friends" />
                    </label>
                    <hr />
                    <label className="radioLabel"> Fun
                    <input type="radio" name="catSelect" value="fun" />
                    </label>
                    <hr />
                    <label className="radioLabel"> Unsorted
                    <input type="radio" name="catSelect" value="unsorted" />
                    </label>
                </form>
            </div>

            <button className="back-button" onClick={this.props.catClick}>Back</button>
            <button className="next-button" onClick={this.completeClick}>Next</button>

        </div>
    )}
}
