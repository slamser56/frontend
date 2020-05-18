import * as yup from 'yup';

const phoneRegExp = /^(\+?\d{0,12})/;
const codeRegExp = /^[0-9]+$/;

export const schemaPhoneNumber = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Input valid phone number')
    .length(13, 'Input valid phone number'),
});

export const schemaCode = yup.object().shape({
  code: yup
    .string()
    .matches(codeRegExp, 'Input correct code')
    .required('Input correct code')
    .length(4, 'Input correct code'),
});
