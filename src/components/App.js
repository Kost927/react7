import React, { Component } from "react";
import "./App.module.css";
import ContactsList from "./contactslist/ContactsList";
import Form from "./Form/Form";
import Alert from "./Alert/Alert";

import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';
import operations from "../redux/operations/operations";


class App extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
this.props.fetchContacts()
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.contacts.find(contact => contact.name === this.state.name)) {
      this.props.showAlert()
      setTimeout (() => this.props.showAlert(), 2000)
    } else {

    this.props.onAddContact({...this.state})
    this.setState({name: "", number: ""})
    }
  };

  addContact = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    const { name, number } = this.state;
    return (
      <>
      {this.props.alertActive && <Alert/>}
        <Form
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
          addContact={this.addContact}
        />
        <ContactsList/>
      </>
    );
  }
}

const mapStateToProos = state => {
  return {
    contacts: state.items,
    alertActive: state.alert
  };
};

const mapDispatchToProps = {
  onAddContact: operations.onAddContact,
  fetchContacts: operations.fetchContacts,
  showAlert: contactsActions.sameContact
  }



export default connect(mapStateToProos, mapDispatchToProps)(App);
