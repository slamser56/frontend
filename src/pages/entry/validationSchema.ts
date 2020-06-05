import * as yup from 'yup';
import { t } from '../../lang';

const phoneRegExp = /^(\+?\d{12})/;

const schemaPhoneNumber = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, t('validation.phoneNumberIsNotValid'))
    .required(t('validation.inputValidPhoneNumber'))
    .length(13, t('validation.inputValidPhoneNumber')),
});

export default schemaPhoneNumber;
