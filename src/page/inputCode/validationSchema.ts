import * as yup from 'yup';

const codeRegExp = /^[0-9]+$/;

const schemaCode = yup.object().shape({
  code: yup
    .string()
    .matches(codeRegExp, 'Input correct code')
    .required('Input correct code')
    .length(4, 'Input correct code'),
});

export default schemaCode;
