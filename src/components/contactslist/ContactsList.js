import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from '../ContactsListItem/ContactsListItem';

const ContactsList = ({ items }) => {
  return (
    <>
      <ul>
      {items.map(contact => {
        return <ContactsListItem key={contact.id} contact={contact} />;
      })}
      </ul>
    </>
  );
};

const mapStateToProos = state => {
  return {
    items: state.items.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()))
  };
};

export default connect(mapStateToProos)(ContactsList);


