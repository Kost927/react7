import React from 'react'
import {CSSTransition} from 'react-transition-group';
import css from './Alert.module.css'
// import { connect } from 'react-redux';

 const Alert = () => {
    return (
        <CSSTransition
      in={alert}
      classNames={css}
      timeout={500}
      unmountOnExit
      >
        <div>
    <span className={css.alert}>This name is already in your contacts</span>
        </div>
        </CSSTransition>
    )
}

// const mapStateToProps = state => {
//     return {
//       alert: state.alert
//     };
//   };
  
//   const mapDispatchToProps = {
//     showAlert: contactsActions.sameContact
//   }


export default Alert