import React from 'react';
import { connect } from 'react-redux';
import { startDeleteContact } from '../../redux/actions/contactsActions';
import { updateFilters } from '../../redux/actions/filtersActions';

import './_contact-item.scss';

const ContactItem = ({type, value, id, deleteContact, setFilterId}) => {

    const handleRemove = () => {
        deleteContact(id)
            .catch(err => console.log(err));
    };

    const handleEdit = () => {
        setFilterId({id});
    };

    return (
        <li className="contacts__item contacts-item">
            <span className="contacts-item__type">{type}:</span>
            <span className="contacts-item__value">{value}</span>
            <button onClick={handleEdit} className="contacts-item__btn contacts-item__btn--edit">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M5.582 20.054l14.886-14.886 6.369 6.369-14.886 14.886-6.369-6.369zM21.153 8.758l-0.698-0.697-11.981 11.98 0.698 0.698 11.981-11.981zM22.549 10.154l-0.698-0.698-11.981 11.982 0.697 0.697 11.982-11.981zM23.945 11.55l-0.698-0.698-11.981 11.981 0.698 0.698 11.981-11.981zM23.319 2.356c0.781-0.783 2.045-0.788 2.82-0.013l3.512 3.512c0.775 0.775 0.77 2.038-0.012 2.82l-2.17 2.17-6.32-6.32 2.17-2.169zM5.092 20.883l6.030 6.030-5.284 1.877-2.623-2.623 1.877-5.284zM4.837 29.117l-3.066 1.117 1.117-3.066 1.949 1.949z"></path>
                </svg>
            </button>
            <button onClick={handleRemove} className="contacts-item__btn contacts-item__btn--remove">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
                </svg>
            </button>
        </li>
    
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => dispatch(startDeleteContact(id)),
    setFilterId: (updates) => dispatch(updateFilters(updates))
});

export default connect(undefined, mapDispatchToProps)(ContactItem);