// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";
import flower from "./images/flower.jpg";
import nature from "./images/nature.jpg";
import strawberry from "./images/strawberry.jpg";

const initialState = {
  numOfItems: 0,
  desktopData:[
    {
        imgaddress:flower,
        title:'Some interesting fact about the color of flowers',
        author:'Biswajit Saha',
        date:'22/22/22',
        tag:['Nature','Education']
    },{
        imgaddress:nature,
        title:'We should always take lesson from nature to make our life beautiful',
        author:'Surabhi Gupta',
        date:'22/22/22',
        tag:['Nature']
    },{
        imgaddress:strawberry,
        title:'Different way of eating strawberry, the luxurious fruit',
        author:'Apurba Talukdar',
        date:'22/22/22',
        tag:['Nature','Food','Education']
    },{
        imgaddress:flower,
        title:'Some interesting fact about the color of flowers',
        author:'Biswajit Saha',
        date:'22/22/22',
        tag:['Nature','Education']
    },{
        imgaddress:nature,
        title:'We should always take lesson from nature to make our life beautiful',
        author:'Surabhi Gupta',
        date:'22/22/22',
        tag:['Nature']
    },{
        imgaddress:strawberry,
        title:'Different way of eating strawberry, the luxurious fruit',
        author:'Apurba Talukdar',
        date:'22/22/22',
        tag:['Nature','Food','Education']
    }
    
],
tagArray : ['food','lifestyle','finance','sports','education'],
post:[{
    title : 'Different way of eating strawberry, the luxurious fruit',
    imgaddress: strawberry ,
    author: 'Biswajit Saha'
},{
    title : 'Some interesting fact about the color of flowers',
    imgaddress: flower ,
    author: 'Surabhi Gupta'
},{
    title : 'We should always take lesson from nature to make our life beautiful',
    imgaddress: nature ,
    author: 'Apurba Talukdar'
}]
};

 const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ITEM:
    //   return {
    //     ...state,
    //     numOfItems: state.numOfItems + 1,
    //   };

    // case DELETE_ITEM:
    //   return {
    //     ...state,
    //     numOfItems: state.numOfItems - 1,
    //   };
    default:
      return state;
  }
};

export default cartReducer;