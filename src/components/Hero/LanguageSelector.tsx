import React, { useContext, useEffect } from 'react';
//Import contexts
import { LanguageContext } from '../../containers/Language';
// import { ThemeContext } from '../../containers/ThemeContext';
import { Redirect, useParams } from 'react-router-dom';

const LanguageSelector = () => {
  const { userLanguageChange, userLanguage } = useContext(LanguageContext);
  // const { theme } = useContext(ThemeContext);
  type LangParam = 'en' | 'es';

  interface ILocale {
    locale: LangParam;
  }

  let { locale }: ILocale = useParams();

  //Sets language according to user preference
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('pref-lang');
    if (!defaultLanguage) {
      defaultLanguage = locale;
    }
    if (userLanguageChange) {
      userLanguageChange(defaultLanguage);
    }
  }, [userLanguageChange, locale]);

  return (
    <>
      <Redirect to={`/${userLanguage}`} />
    </>
  );
};

export default LanguageSelector;
