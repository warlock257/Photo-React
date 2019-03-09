import React, { Component } from 'react';
import './App.css';
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
      totalPhotos: dummyData.length,
      chronoPhotos: 0,
      famPhotos: 0,
      extPhotos: 0,
      friendsPhotos: 0,
      funPhotos: 0,
      unsortedPhotoed: 0
    }
  }

  updateName = (ev) => {
    ev.preventDefault();
    var formData = ev.target.value;
    this.setState({ name: formData });
  }

  signInNext= (ev) => {
    ev.preventDefault();
    var formData = document.getElementById('nameField').value;
    console.log(formData);
    //this.setState({name: formData})
    if(this.state.name === 'none'){
      alert("Enter a name before proceeding");
    } else {
      this.setState({page: 2});
    }
  }
  
  
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
    if (this.state.uploadedImgs[i].catagory === 'chrono'){
      chronoCount++
    } else if (this.state.uploadedImgs[i].catagory === 'family'){
      familyCount++
    }else if (this.state.uploadedImgs[i].catagory === 'extended'){
      extendedCount++
    }else if (this.state.uploadedImgs[i].catagory === 'friends'){
      friendsCount++
    }else if (this.state.uploadedImgs[i].catagory === 'fun'){
      funCount++
    }else if (this.state.uploadedImgs[i].catagory === 'unsorted'){
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

updateUploadedImgs = (uploadedImgs) =>{
  this.setState({
    uploadedImgs:uploadedImgs
  })
}

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
      sidebar = <Sidebar2 totalPhotos={this.state.totalPhotos}/>
      mainPage = <Main2Upload uploadedImgs={this.state.uploadedImgs}
                              updateUploadedImgs={this.updateUploadedImgs} />
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
                          updateCatCount={this.updateCatCount} />
      mainPage = <Main3Cat dummydata={this.state.dummydata}
                          uploadedImgs={this.state.uploadedImgs}
                           updateCatState={this.updateCatState}
                           updateCatCount={this.updateCatCount}/>
  }
    else if (this.state.page === 4){
      console.log('page 4')
      sidebar = <Sidebar4 />
      mainPage = <Main4Order />
  }
    else if (this.state.page === 5){
      console.log('page 5')
      sidebar = <Sidebar5 />
      mainPage = <Main5Complete />
  }



    return (
      <div>
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

