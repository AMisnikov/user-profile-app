export const getFieldErrors = (name, value, validationSchema) => {

    let errors = [];
   
    if(!validationSchema[name]) {
        return [];
    }

    if(validationSchema[name].required && !value) {
        errors.push('Обязательное поле');
    }

  
    if(value && validationSchema[name].rules.length > 0) {

        validationSchema[name].rules.forEach(rule => { 
            if(!rule.test(value)) {
                errors.push(rule.message);
            }
        });
    }


    return errors;
};