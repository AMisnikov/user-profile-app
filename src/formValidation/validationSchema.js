const validationSchema = {
    login: {
        required: true,
        rules: [
            {
                test: (value) => /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value),
                message: 'Некорректный формат: введите валидный E-mail'      
            }
        ]
    },
    password: {
        required: true,
        rules: [
            {
                test: (value) => value.length > 7,
                message: 'Длина пароля должна быть не менее 8 символов' 
            },
            {
                test: (value) => !/[а-яА-Я]/.test(value),
                message: 'Пароль не может содержать кириллицу' 
            }
        ]
    }
};

export default validationSchema;