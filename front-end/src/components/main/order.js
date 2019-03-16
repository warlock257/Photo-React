import React, {Component} from 'react';
//import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

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
    items: this.props.loadedArray
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    const {items} = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>
    );
  }
}

export default Main4Order

//render(<App />, document.getElementById('root'));