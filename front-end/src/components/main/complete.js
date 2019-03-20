import React, { Component} from 'react';

export default class Main5Complete extends Component {

  startOver = () =>{
    window.location.reload();
  }


    render () {
      return (
        <div className='completePage'>
            <div className="completeButton">
              <button onClick={this.startOver}>Start Over</button>
              <button>Download Sorted Files</button>
              <button>Submit to Company</button>
            </div>

        </div>

      )
    }
  }



