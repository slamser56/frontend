import i18n from 'i18n-js';
import en from './en';
import ru from './ru';

i18n.translations.en = en;
i18n.translations.ru = ru;

i18n.defaultLocale = 'en';

export const changeLanguage = (language: string):void => {
    i18n.locale = language;
};

export { en as langConstants };
export const { t } = i18n;
