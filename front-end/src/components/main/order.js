import React, {Component} from 'react';
//import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
//import arrayMove from 'array-move';

const SortableItem = sortableElement(({value}) => 
// <li>{value}</li>
<div className="sortablePic">
  <img src={value.imgLocalUrl} alt={value.imgLocalUrl} />
</div>
);

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});



class Main4Order extends Component {
  state = {
    //items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    //items: []
  };


  render() {
    let items = []
    let headingStr = ""
    if(this.props.loadedArray === "chrono"){
      items = this.props.chronoArray
      headingStr = "Chronological"
    } else if (this.props.loadedArray === "family") {
      items = this.props.familyArray
      headingStr = "Family"
    }else if (this.props.loadedArray === "extended") {
      items = this.props.extArray
      headingStr = "Extended Family"
    }else if (this.props.loadedArray === "friends") {
      items = this.props.friendsArray
      headingStr = "Friends"
    }else if (this.props.loadedArray === "fun") {
      items = this.props.funArray
      headingStr = "Fun"
    }else if (this.props.loadedArray === "unsorted") {
      items = this.props.unsortedArray
      headingStr = "No Category"

    }

    let miniOrder = items.map((object, index) =>{
      return (
        <img src={items[index].imgLocalUrl} alt="miniOrderPhoto"/>
      )
    }) 
    
    return (
      <div className="UploadPage">

      <SortableContainer onSortEnd={this.props.onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>

      <div className="miniOrderContainer">
          <h3>{headingStr} Overview</h3>
          <h4>Number of pictures: {items.length}</h4>
          <div className="miniPics">
            {miniOrder}
          </div>
      </div>  


    </div>
    );
  }
}

export default Main4Order
