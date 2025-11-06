import {getRequestConfig} from 'next-intl/server';

type TLocales = 'en' | 'ua'

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale: TLocales = 'en';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});