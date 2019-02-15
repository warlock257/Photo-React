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
            <br />
          <form onSubmit={this.props.signInNext}>
            <div className="form-group">
              <label htmlFor="nameField">Enter your last name</label>
              <input type="text" ref="nameField" name="nameField" className="form-control form-control-lg" 
              id="nameField" placeholder="Name" onChange={this.updateName} />
            </div>
            <button className="btn btn-primary">Next</button>
          </form>
        </div>

      )
    }
  }
