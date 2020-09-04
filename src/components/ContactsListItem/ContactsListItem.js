import React from 'react';
import { CSSTransition} from 'react-transition-group';
import css from "./ContactsListItem.module.css";

import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contactsActions';
import operations from '../../redux/operations/operations';

const ContactsListItem = ({ contact, remooveContact }) => {
  return (
    <>
        <CSSTransition  timeout={1000} classNames={css}>
        <li name="name">
          {contact.name}: {contact.number}
          <button type="button" onClick={() => remooveContact(contact.id)}>
            Delete
          </button>
        </li>
        </CSSTransition>
       
    </>
  );
};


const mapDispatchToProps =  {
//   return {
// removeContact: () => dispatch(contactsActions.removeContact(ownProps.contact.id))
//   }
  remooveContact: operations.removeContact,
}


export default connect(null, mapDispatchToProps)(ContactsListItem);

