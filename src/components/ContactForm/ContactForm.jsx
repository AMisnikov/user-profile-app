import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../redux/selectors/auth';
import { selectContactById } from '../../redux/selectors/contacts';
import { startAddContact, startUpdateContact } from '../../redux/actions/contactsActions';
import { resetFilters } from '../../redux/actions/filtersActions';
import { Button } from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import Select from '../Select/Select.jsx';
import Loader from '../Loader/Loader.jsx';
import FormAlert from '../FormAlert/FormAlert.jsx';
import { ContactFormContainer, ContactFormRow, ContactFormActions, ContactFormType, ContactFormValue } from './ContactForm.styles.jsx';



const selectOptions = [
    {
        name: 'E-mail',
        value: 'email'
    },
    {
        name: 'Телефон',
        value: 'tel'
    },
    {
        name: 'Адрес',
        value: 'address'
    },
    {
        name: 'Skype',
        value: 'skype'
    },
    {
        name: 'VK',
        value: 'vk'
    },
    {
        name: 'Прочее',
        value: 'other'
    }
];




const ContactForm = ({ className, createContact, updateContact, resetFilters, currentContact }) => {

    const [isFormVisible, setFormVisibility] = useState(false);
    const [type, setType] = useState(selectOptions[0].value);
    const [value, setValue] = useState('');
    const [fieldErrors, setFieldErrors] = useState([]);
    const [isFetching, setFetchingStatus] = useState(false);
    const [isFormValid, setFormValidity] = useState(false);
    const [formErr, setFormErr] = useState('');
    
    
    useEffect(() => {
        if (currentContact) {

            const convertedType = selectOptions.find(item => item.name === currentContact.type);

            if (convertedType) {
                setType(convertedType.value);
            } else {
                setType(selectOptions[selectOptions.length - 1].value);
            }
            

            
            setValue(currentContact.value);
            setFormVisibility(true);  
        } else {
            clearFields();
            setFormVisibility(false);  
        }
    }, [currentContact]);


    const clearFields = () => {
        setType('email');
        setValue('');

    };


    const toggleForm = () => {
        setFormVisibility(!isFormVisible);
    };


    const handleSelectChange = (e) => {
        const selected =  selectOptions.find(item => item.value === e.target.value);
        setType(selected.value);
    }

    const handleInputChange = (e) => {

        setValue(e.target.value);

        if (e.target.value) {
            
            if (fieldErrors.length > 0) {
                setFieldErrors([]);
            }

            if (!isFormValid) {
                setFormValidity(true);
            }

            if (formErr) {
                setFormErr('');
            }
            
        } else {
            setFieldErrors(['Обязательное поле']);
            setFormValidity(false);
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFetchingStatus(true);

        const convertedType = selectOptions.find(item => item.value === type).name;

        if(currentContact) {
            updateContact(currentContact.id, { type: convertedType, value })
            .then(() => {
                resetFilters();
                clearFields();
                toggleForm();
                setFetchingStatus(false);
                setFormValidity(false);
            
            })
            .catch(err => {
                console.log(err);
                setFormValidity(false);
                setFormErr('Не удалось обновить контакт. Попробуйте позже');
                setFetchingStatus(false);


            });
            
        } else {
            createContact({ type: convertedType, value })
            .then(() => {
                clearFields();
                toggleForm();
                setFetchingStatus(false);
                setFormValidity(false);
            })
            .catch(err => {
                console.log(err);
                setFormValidity(false);
                setFormErr('Не удалось создать контакт. Попробуйте позже');
                setFetchingStatus(false);

            });

        }

    };


    const handleCancel = () => {
        resetFilters();
        clearFields();
        toggleForm();
        setFormErr('');
    };

    return (
        <ContactFormContainer>
            { 
                isFormVisible ? 
                (
                    <form onSubmit={handleSubmit}  action="#" method="POST" noValidate> 
                       
                            <ContactFormRow>
                                <ContactFormType>
                                    <Select 

                                        onChange={handleSelectChange} 
                                        options={selectOptions} 
                                        labelText="Тип" name="type" 
                                        id="contact-type"  
                                        value={type}

                                    />
                                </ContactFormType>
                                <ContactFormValue>
                                    <Input 
                                        onChange={handleInputChange} 
                                        id="contact-value" 
                                        labelText="Значение" 
                                        placeholder="Введите контактные данные" 
                                        name="value" type="text" 
                                        value={value} 
                                        errors={fieldErrors}

                                    />
                                </ContactFormValue>
                            </ContactFormRow>
                            <ContactFormActions>
                                <Button 
                                    color="#000"
                                    textColor="#fff"
                                    type="submit"
                                    disabled={!isFormValid || isFetching || formErr ? true : false }
                                >
                                    { isFetching ? <Loader size={20} /> : 'Сохранить'} 
                                </Button>
                                <Button 
                                    onClick={handleCancel}
                                    type="button"
                                >
                                    Отмена
                                </Button>
                            </ContactFormActions>
                        
                        {formErr && <FormAlert>{formErr}</FormAlert> }
                    </form>
                )
                 : 
                 (
                    <Button 
                        onClick={toggleForm} 
                        style={{
                            width: '26.5rem',
                            margin: '0 auto',
                            display: 'block'
                        }}
                    
                    >
                        Добавить новый контакт
                    </Button>
                 )
                 
                }
            
        </ContactFormContainer>
    );
}

const mapStateToProps = (state) => ({
    auth: selectUser(state),
    currentContact: selectContactById(state)
});

const mapDispatchToProps = (dispatch) => ({
    createContact: (contact) => dispatch(startAddContact(contact)),
    updateContact: (id, updates) => dispatch(startUpdateContact(id, updates)),
    resetFilters: () => dispatch(resetFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);