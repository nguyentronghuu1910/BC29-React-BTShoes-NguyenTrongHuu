import React, { Component } from 'react';

import style from "./style.module.css";

import { connect } from 'react-redux';

class ProductItem extends Component {
   render() {
      const { image, name, price } = this.props.item;
      return (
         <div className="col-4 mb-4 text-center">
            <div className="card align-items-center">
               <img className={`card-img-top w-50 ${style.imgShoes} img-fluid`} src={image} alt="..." data-toggle="modal" data-target="#myModal"
                  onClick={() => {
                     this.props.selectedShoes(this.props.item);
                  }}
               />
               <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text">{price}$</p>
                  <button className='btn btn-outline-info'>Add To Cart</button>
               </div>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      selectedShoes: (phone) => {
         dispatch({
            type: "SELECTED_SHOES",
            payload: phone
         })
      }
   }
};
export default connect(null, mapDispatchToProps)(ProductItem);