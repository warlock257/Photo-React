import React, { Component} from 'react';

export default class Main1Sign extends Component {
    constructor () {
      super()
      this.state = {
        name:'name test'
      }
    }

    render () {
      return (
        <div className='signInDiv'>
            <h2>Welcome to our Photo Organizer</h2>
            
          <form className="name-form" onSubmit={this.props.signInNext}>
            <div className="name-form-div">
              <input type="text" ref="nameField" name="nameField" className="form-control form-control-lg" 
              id="nameField" placeholder="Enter your last name" onChange={this.props.updateName} />

              <button className="next-button signin-button">Next</button>

            </div>
            
          </form>
        </div>
      )
    }
  }
