import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
//import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
//import './css/bootstrap.min.css';
//import './js/jquery-3.3.1.slim.min.js';
//import './css/jquery-ui.css';
//import './js/popper.min.js';

import './css/masterstyles.scss'
import './css/topbarStyle.css';
import './css/sidebarStyle.scss';
import './css/signInStyles.scss';
import './css/upload-styles.scss';
import './css/cat-mainStyle.scss';
import './css/order-styles.scss';
import './css/complete-styles.scss'
import './fonts/stylesheet.css';

import Topbar from './components/topbar/topbar.js';
import Sidebar1 from './components/sidebar/sidebar1.js';
import Sidebar2 from './components/sidebar/sidebar2.js';
import Sidebar3 from './components/sidebar/sidebar3.js';
import Sidebar4 from './components/sidebar/sidebar4.js';
import Sidebar5 from './components/sidebar/sidebar5.js';
import Main1Sign from './components/main/signIn.js';
import Main2Upload from './components/main/upload.js';
import Main3Cat from './components/main/catagorize.js';
import Main4Order from './components/main/order.js';
import Main5Complete from './components/main/complete.js';
import dummyData from './components/dummyData.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 1,
      name: 'none',
      dummydata:dummyData,
      uploadedImgs:[],
      totalPhotos: 0,
      chronoPhotos: 0,
      famPhotos: 0,
      extPhotos: 0,
      friendsPhotos: 0,
      funPhotos: 0,
      unsortedPhotoed: 0,
      uploading:false,
      chronoArray: [],
      familyArray: [],
      extArray: [],
      friendsArray: [],
      funArray: [],
      unsortedArray: [],
      loadedArray:"chrono"
    }
  }
  
  //PAGE CHANGE FUNCTIONS

  signInClick=() => {
    this.setState({page: 1});
  } 
  uploadClick=() => {
    this.setState({page: 2});
  }  
  catClick=() => {
    this.setState({page: 3});
  }  
  orderClick=() => {
    this.setState({page: 4});
  }  
  completeClick=()=> {
    this.setState({page: 5});
  }  

  // PAGE 1 FUNCTIONS

  updateName = (ev) => {
    ev.preventDefault();
    var formData = ev.target.value;
    this.setState({ name: formData });
  }

  signInNext= (ev) => {
    ev.preventDefault();
    //var formData = document.getElementById('nameField').value;
    if(this.state.name === 'none'){
      alert("Enter a name before proceeding");
    } else {
      const axConfig = {
        "method":"POST",
        "url":"http://localhost:8080/setname",
        "data":{
            "userName":this.state.name
        },headers:{
          'content-type':'application/json'
         }
      }
      axios(axConfig)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })

      this.setState({page: 2});
    }
  }
  
  //PAGE 2 FUNCTIONS
  
  uploading=()=>{
    console.log("uploading")
    this.setState({uploading:true})
    this.setState({uploading:false})
  }
  
  updateUploadedImgs = (uploadedImgs) =>{
    console.log("update uploaded img fired")
    this.setState({
      uploadedImgs:uploadedImgs
    })
  }


  // PAGE 3 FUNCTIONS

updateCatState = (copy) =>{
  this.setState({ uploadedImgs:copy })
}
updateCatCount = () =>{
  let chronoCount = 0;
  let familyCount = 0;
  let extendedCount = 0;
  let friendsCount = 0;
  let funCount = 0;
  let unsortedCount = 0;
  for (let i = 0; i < this.state.uploadedImgs.length; i++){
    if (this.state.uploadedImgs[i].category === 'chrono'){
      chronoCount++
    } else if (this.state.uploadedImgs[i].category === 'family'){
      familyCount++
    }else if (this.state.uploadedImgs[i].category === 'extended'){
      extendedCount++
    }else if (this.state.uploadedImgs[i].category === 'friends'){
      friendsCount++
    }else if (this.state.uploadedImgs[i].category === 'fun'){
      funCount++
    }else if (this.state.uploadedImgs[i].category === 'unsorted'){
      unsortedCount++
    }
  }
  this.setState({
    chronoPhotos:chronoCount,
    famPhotos:familyCount,
    extPhotos: extendedCount,
    friendsPhotos: friendsCount,
    funPhotos: funCount,
    unsortedPhotoed: unsortedCount
  })
}
updateCategoryArrays = (chronoArray,familyArray,extArray,friendsArray,funArray,unsortedArray) =>{
  this.setState({
    chronoArray: chronoArray,
    familyArray: familyArray,
    extArray: extArray,
    friendsArray: friendsArray,
    funArray: funArray,
    unsortedArray: unsortedArray
  })
}


//PAGE 4 FUNCTIONS

orderFilter = (catToOrder) =>{
  console.log("ordering "+ catToOrder)
  if (catToOrder === "chrono"){
    this.setState({loadedArray:"chrono"})
  } else if (catToOrder === "family"){
    this.setState({loadedArray:"family"})
  } else if (catToOrder === "extended"){
    this.setState({loadedArray:"extended"})
  } else if (catToOrder === "friends"){
    this.setState({loadedArray:"friends"})
  } else if (catToOrder === "fun"){
    this.setState({loadedArray:"fun"})
  } else if (catToOrder === "unsorted"){
    this.setState({loadedArray:"unsorted"})
  }
}

onSortEnd = ({oldIndex, newIndex}) => {
  
  if (this.state.loadedArray === "chrono"){
    this.setState(({items}) => ({
      chronoArray: arrayMove(this.state.chronoArray, oldIndex, newIndex),
    }));
  } else if (this.state.loadedArray ==="family"){
    this.setState(({items}) => ({
      familyArray: arrayMove(this.state.familyArray, oldIndex, newIndex),
    }));
  }else if (this.state.loadedArray ==="extended"){
    this.setState(({items}) => ({
      extArray: arrayMove(this.state.extArray, oldIndex, newIndex),
    }));
  } else if (this.state.loadedArray ==="friends"){
    this.setState(({items}) => ({
      friendsArray: arrayMove(this.state.friendsArray, oldIndex, newIndex),
    }));
  }else if (this.state.loadedArray ==="fun"){
    this.setState(({items}) => ({
      funArray: arrayMove(this.state.funArray, oldIndex, newIndex),
    }));
  }else if (this.state.loadedArray ==="unsorted"){
    this.setState(({items}) => ({
      unsortedArray: arrayMove(this.state.unsortedArray, oldIndex, newIndex),
    }));
  }
};




render() {

  //which page(s) to render by state
  var sidebar ='';
  var mainPage='';
  if (this.state.page === 1){
      console.log('page 1')
      sidebar = <Sidebar1 />
      mainPage = <Main1Sign updateName={this.updateName} 
                            page={this.state.page}  
                            signInNext={this.signInNext} />
  } else if (this.state.page === 2){
      console.log('page 2')
      sidebar = <Sidebar2 totalPhotos={this.state.totalPhotos}
                          uploadedImgs={this.state.uploadedImgs}
                          signInClick={this.signInClick}
                          catClick={this.catClick}/>
      mainPage = <Main2Upload uploadedImgs={this.state.uploadedImgs}
                              updateUploadedImgs={this.updateUploadedImgs}
                              userName={this.state.name}
                              uploading={this.uploading} />
  }
    else if (this.state.page === 3){
      console.log('page 3')
      sidebar = <Sidebar3 totalPhotos={this.state.totalPhotos}
                          chronoPhotos={this.state.chronoPhotos}
                          famPhotos={this.state.famPhotos}
                          extPhotos={this.state.extPhotos}
                          friendsPhotos={this.state.friendsPhotos}
                          funPhotos={this.state.funPhotos}
                          unsortedPhotoed={this.state.unsortedPhotoed}
                          updateCatCount={this.updateCatCount}
                          uploadedImgs={this.state.uploadedImgs}
                          updateCategoryArrays={this.updateCategoryArrays}
                          uploadClick={this.uploadClick}
                          orderClick={this.orderClick} />
      mainPage = <Main3Cat dummydata={this.state.dummydata}
                           uploadedImgs={this.state.uploadedImgs}
                           updateCatState={this.updateCatState}
                           updateCatCount={this.updateCatCount}/>
  }
    else if (this.state.page === 4){
      console.log('page 4')
      sidebar = <Sidebar4 orderFilter={this.orderFilter}
                          catClick={this.catClick}
                          completeClick={this.completeClick}
                          chronoArray={this.state.chronoArray} 
                          familyArray={this.state.familyArray} 
                          extArray={this.state.extArray} 
                          friendsArray={this.state.friendsArray} 
                          funArray={this.state.funArray} 
                          unsortedArray={this.state.unsortedArray} 
                          />
      mainPage = <Main4Order uploadedImgs={this.state.uploadedImgs}
                              loadedArray={this.state.loadedArray}
                              chronoArray={this.state.chronoArray}
                              familyArray={this.state.familyArray}
                              extArray={this.state.extArray}
                              friendsArray={this.state.friendsArray}
                              funArray={this.state.funArray}
                              unsortedArray={this.state.unsortedArray}
                              onSortEnd={this.onSortEnd} />

  }
    else if (this.state.page === 5){
      console.log('page 5')
      sidebar = <Sidebar5 
                          chronoArray={this.state.chronoArray} 
                          familyArray={this.state.familyArray} 
                          extArray={this.state.extArray} 
                          friendsArray={this.state.friendsArray} 
                          funArray={this.state.funArray} 
                          unsortedArray={this.state.unsortedArray}  />
      mainPage = <Main5Complete />
  }


    return (
      <div className="photo-react">
        <Topbar 
        name={this.state.name}
        page={this.state.page}
        signInClick={this.signInClick}
        uploadClick={this.uploadClick}
        catClick={this.catClick}
        orderClick={this.orderClick}
        completeClick={this.completeClick}
        />
        <div className='lowerSection'>
          {sidebar}
          {mainPage}
        </div>
      </div>
    );
  }
}

export default App;

