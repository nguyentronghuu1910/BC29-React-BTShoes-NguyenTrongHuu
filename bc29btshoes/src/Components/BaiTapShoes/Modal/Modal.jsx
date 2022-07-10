import React, { Component } from 'react';

import { connect } from 'react-redux';

class Modal extends Component {
   render() {
      const { name, description } = this.props.selectedShoes
      return (
         <div className="modal" id="myModal">
            <div className="modal-dialog">
               <div className="modal-content">

                  <div className="modal-header">
                     <h4 className="modal-title">{name}</h4>
                     <button type="button" className="close" data-dismiss="modal" />
                  </div>

                  <div className="modal-body">
                     <p>{description}</p>
                  </div>

                  <div className="modal-footer">
                     <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProp = (state) => {
   return {
      selectedShoes: state.shoesReducer.selectedShoes
   }
}

export default connect(mapStateToProp)(Modal);