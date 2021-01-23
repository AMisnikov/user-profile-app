import { UPDATE_FILTERS, RESET_FILTERS } from '../actionTypes/filtersActionTypes';

export const updateFilters = (updates) => ({
    type: UPDATE_FILTERS,
    updates
});

export const resetFilters = () => ({
    type: RESET_FILTERS
});