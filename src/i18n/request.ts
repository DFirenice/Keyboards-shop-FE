import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

type TLocales = 'us' | 'ua' | string | undefined

export default getRequestConfig(async () => {
  const storage = await cookies()
  const locale: TLocales = storage.get("locale")?.value || 'us';

  try {
    const messages = (await import(`../../messages/${locale.valueOf()}.json`))?.default
    return { messages, locale }
  }

  catch (err) {
    console.warn('Falling back to default locale: ', err)
    const messages = (await import('../../messages/us.json'))?.default
    return { messages, locale: 'us' }
  }
});