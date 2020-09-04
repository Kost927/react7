import React from 'react';
import { connect } from 'react-redux';
import { getFilter } from '../../redux/selectors/selectors';
import contactsActions from '../../redux/contacts/contactsActions';

function Filter({ getFilteredValue, filter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <label>
        Filter:{' '}
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={getFilteredValue}
        />
      </label>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // filter: getFilterSelector(state),
    filter: getFilter(state),
  };
};

const mapDispatchToProps = {
    getFilteredValue: contactsActions.filterContacts
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
