import React, { Component } from 'react';

import Modal from '../Modal/Modal';

import dataShoes from "../../../Data/Data_shoes.json";

import ProductItem from './ProductItem';

export default class ProductsList extends Component {

   renderProductList = () => {
      const content = dataShoes.map((product) => {
         return (
            <ProductItem item={product} key={product.id}></ProductItem>
         );
      });
      return content;
   };


   render() {
      return (
         <div>
            <div className="row">
               {this.renderProductList()};
            </div>
            <Modal />
         </div>
      )
   }
}
