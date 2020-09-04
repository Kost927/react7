import React from 'react';
import css from './Form.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFilter } from '../../redux/selectors/selectors';
import Filter from '../Filter/Filter';

const Form = ({ handleSubmit, name, addContact, number }) => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames={css}
        timeout={500}
        unmountOnExit
      >
        <h2 className={css.title}>Phonebook</h2>
      </CSSTransition>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input type="text" value={name} name="name" onChange={addContact} />
        </label>

        <label>
          Number:{' '}
          <input
            type="tel"
            value={number}
            name="number"
            onChange={addContact}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>

      <h2>Contacts</h2>

      <Filter />
    </>
  );
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state),
  };
};

export default connect(mapStateToProps)(Form);
