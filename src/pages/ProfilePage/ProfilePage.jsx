import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Contacts from '../../components/Contacts/Contacts.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import { ProfilePageBody, ProfilePageElement, ProfilePageHeading, ProfilePageWrapper } from './ProfilePage.styles.jsx';

const ProfilePage = () => (
    <ProfilePageElement>
        <ProfilePageWrapper>
            <ProfilePageHeading>Личный кабинет пользователя</ProfilePageHeading>
            <Header />
            <ProfilePageBody>
                <Contacts />
                <ContactForm />
            </ProfilePageBody>
        </ProfilePageWrapper>
    </ProfilePageElement>
);

export default ProfilePage;