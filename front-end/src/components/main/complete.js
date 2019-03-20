import React, { Component} from 'react';

export default class Main5Complete extends Component {

  startOver = () =>{
    window.location.reload();
  }


    render () {
      return (
        <div className='signIn'>
            <h3>Complete</h3>
            <button onClick={this.startOver}>Start Over</button>
        </div>

      )
    }
  }



