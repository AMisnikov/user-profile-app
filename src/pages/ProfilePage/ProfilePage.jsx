import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Contacts from '../../components/Contacts/Contacts.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';


import './_profile-page.scss';

const ProfilePage = () => (
    <div className="profile-page">
        <div className="profile-page__wrapper">
            <h1 className="heading-primary profile-page__heading">Личный кабинет пользователя</h1>
            <Header />
            <main className="profile-page__body">
                <Contacts />
                <ContactForm />
            </main>
        </div>
    </div>
);

export default ProfilePage;