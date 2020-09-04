import { createSelector } from 'reselect'

const getFilter = (state) => state.getFilter
const getFilterSelector = createSelector([getFilter], (filter) => filter)


export {getFilter, getFilterSelector}