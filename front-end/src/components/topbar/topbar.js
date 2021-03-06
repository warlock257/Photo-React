import React, { Component} from 'react';
// import App from '../../App';

export default class Topbar extends Component {
    constructor () {
      super()
      this.state = {
        }
    }

    welcomeName = () =>{
      if (this.props.name === 'none'){
        return ("")
      } else{
        return this.props.name
      }
    }

    render () {

    var circle1 = '';
    var circle2 = '';
    var circle3 = '';
    var circle4 = '';
    var circle5 = '';
    if (this.props.page === 1){
      circle1 = 'green-circle';
      circle2 = 'white-circle';
      circle3 = 'white-circle';
      circle4 = 'white-circle';
      circle5 = 'white-circle';
    } else if (this.props.page === 2){
      circle1 = 'green-circle';
      circle2 = 'green-circle';
      circle3 = 'white-circle';
      circle4 = 'white-circle';
      circle5 = 'white-circle';
    } else if (this.props.page === 3){
      circle1 = 'green-circle';
      circle2 = 'green-circle';
      circle3 = 'green-circle';
      circle4 = 'white-circle';
      circle5 = 'white-circle';
    } else if (this.props.page === 4){
      circle1 = 'green-circle';
      circle2 = 'green-circle';
      circle3 = 'green-circle';
      circle4 = 'green-circle';
      circle5 = 'white-circle';
    } else if (this.props.page === 5){
      circle1 = 'green-circle';
      circle2 = 'green-circle';
      circle3 = 'green-circle';
      circle4 = 'green-circle';
      circle5 = 'green-circle';
    }

      return (

        <div className="topbar">
        <div className="row progress-circles">
            
            <div className="circles">
                <div className={circle1} id="signIn" ><span className="circle-text-signIn">Sign in</span></div>
                <div className="progress-line"></div>
                <div className={circle2} id="upload" ><span className="circle-text-upload">Upload</span></div>
                <div className="progress-line"></div>
                <div className={circle3} id="categorize" ><span className="circle-text-cat">Categorize</span></div>
                <div className="progress-line"></div>
                <div className={circle4} id="order" ><span className="circle-text-order">Order</span></div>
                <div className="progress-line"></div>
                <div className={circle5} id="complete" ><span className="circle-text-complete">Complete</span></div>
            </div>
            
            <div className="topbarName">
              <h3>Welcome,</h3>
              <h3>{this.welcomeName()}</h3>
            </div>
        </div>
          

      </div>
      )
    }
  }
  
  //onClick={this.props.signInClick}
  // onClick={this.props.uploadClick}
  // onClick={this.props.catClick}
  // onClick={this.props.orderClick}
  // onClick={this.props.completeClick}