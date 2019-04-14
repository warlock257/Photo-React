import React, { Component} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default class Main5Complete extends Component {

  startOver = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will lose all your progress!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Start over!'
    }).then((result) => {
      if (result.value) {

        window.location.reload();
      }
    })
    
  }

    render () {
      return (
        <div className='completePage'>
            <div className="completeButton">
              <button onClick={this.startOver}>Start Over</button>
              
              <button>Submit to Company</button>
            </div>
        </div>
      )
    }
  }


  // <button><a href={this.props.zipUrl}>Download Sorted Files</a></button>