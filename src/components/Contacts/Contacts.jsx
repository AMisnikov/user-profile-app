import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors/contacts';
import { startSetContacts } from '../../redux/actions/contactsActions';
import ContactItem from '../ContactItem/ContactItem.jsx';
import { ContactsElement } from './Contacts.styles.jsx';


const Contacts = ({ contacts, fetchContacts }) => {

    const [message, setMessage] = useState('Загрузка...');

    useEffect(() => {
        fetchContacts()
            .then(() => {
                setMessage('Контакты не найдены');
            })
            .catch(err => {
                console.log(err);
                setMessage('Произошла ошибка. Попробуйте обновить страницу');
            })
    }, []);

    


    return (
        <ContactsElement >
            <ul>
                { contacts.length > 0 ? (
                    contacts.map((item, index) => <ContactItem id={item.id} type={item.type} value={item.value} key={index} />)
                ) : (
                    <p>{message}</p>
                )}
            </ul>
        </ContactsElement>
    );
};

const mapStateToProps = (state) => ({
    contacts: selectFilteredContacts(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchContacts: () => dispatch(startSetContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);