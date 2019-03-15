import React from 'react';
import ParcelHoc from 'react-dataparcels/ParcelHoc';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';
import ParcelDrag from 'react-dataparcels-drag';

const FruitListParcelHoc = ParcelHoc({
    name: "fruitListParcel",
    valueFromProps: (/* props */) => [
        "Apple",
        "Banana",
        "Crumpets"
    ]
});

const SortableFruitList = ParcelDrag({
    element: (fruitParcel) => <ParcelBoundary parcel={fruitParcel}>
        {(parcel) => <div className="Box-draggable">
            <input type="text" {...parcel.spreadDOM()} />
            <button onClick={() => parcel.insertAfter(`${parcel.value} copy`)}>+</button>
            <button onClick={() => parcel.delete()}>x</button>
            <img src="tester.jpg" alt=""/>
        </div>}
    </ParcelBoundary>
});

const FruitListEditor = (props) => {
    let {fruitListParcel} = props;
    return <div className="sortableOuter">
        <SortableFruitList parcel={fruitListParcel} />
        <button onClick={() => fruitListParcel.push("New fruit")}>Add new fruit</button>
    </div>;
};

export default FruitListParcelHoc(FruitListEditor);


