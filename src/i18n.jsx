import * as React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import {
  af,
  ar,
  ca,
  cs,
  da,
  de,
  el,
  en,
  es,
  fi,
  fr,
  he,
  hu,
  id,
  it,
  ja,
  ko,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sr,
  sv,
  tr,
  uk,
  vi,
  zh
} from 'make-plural/plurals'
import { useActiveLocale } from './hooks/useActiveLocale'
import { DEFAULT_LOCALE } from './utils/locales'

const plurals = {
  'af-ZA': af,
  'ar-SA': ar,
  'ca-ES': ca,
  'cs-CZ': cs,
  'da-DK': da,
  'de-DE': de,
  'el-GR': el,
  'en-US': en,
  'es-ES': es,
  'fi-FI': fi,
  'fr-FR': fr,
  'he-IL': he,
  'hu-HU': hu,
  'id-ID': id,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'nl-NL': nl,
  'no-NO': no,
  'pl-PL': pl,
  'pt-BR': pt,
  'pt-PT': pt,
  'ro-RO': ro,
  'ru-RU': ru,
  'sr-SP': sr,
  'sv-SE': sv,
  'tr-TR': tr,
  'uk-UA': uk,
  'vi-VN': vi,
  'zh-CN': zh,
  'zh-TW': zh
}

export async function dynamicActivate(locale) {
  const { messages } = await import(`@lingui/loader!./locales/${locale}.po`)
  i18n.loadLocaleData(locale, { plurals: () => plurals[locale] })
  i18n.load(locale, messages)
  i18n.activate(locale)
}

const LanguageContext = React.createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {}
})

export const useLanguageContext = () => {
  const value = React.useContext(LanguageContext)

  return value
}

export function LanguageProvider({ children }) {
  const { activeLocale, setActiveLocale } = useActiveLocale()
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    dynamicActivate(activeLocale)
      .then(() => {
        setLoaded(true)
      })
      .catch((error) => {
        console.error('Failed to activate locale', activeLocale, error)
      })
  }, [activeLocale])

  // prevent the app from rendering with placeholder text before the locale is loaded
  if (!loaded) return null

  return (
    <LanguageContext.Provider
      value={{
        locale: activeLocale,
        setLocale: setActiveLocale
      }}
    >
      <I18nProvider forceRenderOnLocaleChange={false} i18n={i18n}>
        {children}
      </I18nProvider>
    </LanguageContext.Provider>
  )
}
