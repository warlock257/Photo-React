import React, { Component } from 'react';
import './App.css';
//import './css/bootstrap.min.css';
//import './js/jquery-3.3.1.slim.min.js';
//import './css/jquery-ui.css';
//import './js/popper.min.js';

import './css/topbarStyle.css';
import './css/sidebarStyle.scss';
import './css/signInStyles.css';
import './css/upload-styles.scss';
import './css/cat-mainStyle.css';

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
      totalPhotos: dummyData.length,
      chronoPhotos: 0,
      famPhotos: 0,
      extPhotos: 0,
      friendsPhotos: 0,
      funPhotos: 0
    }
  }

  signInNext= (ev) => {
    ev.preventDefault();
    var formData = document.getElementById('nameField').value;
    console.log(formData);
    this.setState({ name: formData });
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
      mainPage = <Main2Upload />
  }
    else if (this.state.page === 3){
      console.log('page 3')
      sidebar = <Sidebar3 totalPhotos={this.state.totalPhotos} />
      mainPage = <Main3Cat />
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
      <div className='row'>
        {sidebar}
        {mainPage}
      </div>
      </div>
    );
  }
}

export default App;

