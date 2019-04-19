import React, { Component} from 'react';
import axios from 'axios';
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

  submitEvent = () =>{
    let totalPhotos = this.props.chronoArray.length + 
                      this.props.familyArray.length +
                      this.props.extArray.length + 
                      this.props.friendsArray.length +
                      this.props.funArray.length + 
                      this.props.unsortedArray.length
    Swal.fire({
      title: '<strong>Your pictures have been received. Send Dell Productions a message to let them know.</strong>',
      type: 'info',
      html:
        `
        <h3><u>Picture Tally</u></h3>
        <p><strong>Total:</strong> ${totalPhotos}</p>
        <p>Chronological: ${this.props.chronoArray.length}</p>
        <p>Family: ${this.props.familyArray.length}</p>
        <p>Extended: ${this.props.extArray.length}</p>
        <p>Friends: ${this.props.friendsArray.length}</p>
        <p>Fun: ${this.props.funArray.length}</p>
        <p>Unsorted: ${this.props.unsortedArray.length}</p>
        <input type="textarea" id="emailMessage" class="swal2-input extraNotes" />
        `,
      // input:'textarea',
      // inputPlaceholder: 'Add additional notes',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'Send',
      cancelButtonText:'Cancel'
    }).then((result) => {
      let notes = document.getElementById('emailMessage').value
      notes = "Additional Client notes: "  + notes
      //console.log(notes)
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Thank you',
          confirmButtonText: 'Lovely!'
        })

        let axconfig = {
          method:"POST",
          url:"/notify",
          data:{
            name:this.props.name,
            message:notes,
            numPhotos:totalPhotos
          },
          headers:{
            'Content-Type':'application/json'
          }
        }
        axios(axconfig)
        .then((res) =>{
          //success
        })
        .catch((err) =>{
          console.log("error")
        })
      }
    })
  }

    render () {
      return (
        <div className='completePage'>
            <div className="completeButton">
              <button onClick={this.startOver}>Start Over</button>
              
              <button onClick={this.submitEvent}>Submit to Company</button>
            </div>
        </div>
      )
    }
  }


  // <button><a href={this.props.zipUrl}>Download Sorted Files</a></button>