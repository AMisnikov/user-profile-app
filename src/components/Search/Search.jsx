import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../redux/actions/filtersActions';
import Input from '../Input/Input.jsx';


const Search = ({  searchText, updateFilters}) => {

    const handleInputChange = (e) => {
        const searchText = e.target.value;
        updateFilters({searchText, id: ''});
    };

    return (
        <div>
            <Input onChange={handleInputChange} id="search-field" name="search" type="text" placeholder="Поиск..." value={searchText}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    searchText: state.filters.searchText
});

const mapDispatchToProps = (dispatch) => ({
    updateFilters: (updates) => dispatch(updateFilters(updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);