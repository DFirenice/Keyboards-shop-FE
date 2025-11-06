import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

type TLocales = 'en' | 'ua' | string | undefined

export default getRequestConfig(async () => {
  const storage = await cookies()
  const locale: TLocales = 'ua' // storage.get("locale")?.value || 'en';
 
  return {
    locale,
    messages: (
      (await import(`../../messages/${locale}.json`))?.default
        || ((await import(`../../messages/en.json`))?.default)
    ),
  };
});