import * as yup from 'yup';

const phoneRegExp = /^(\+?\d{12})/;

const schemaPhoneNumber = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Input valid phone number')
    .length(13, 'Input valid phone number'),
});

export default schemaPhoneNumber;
