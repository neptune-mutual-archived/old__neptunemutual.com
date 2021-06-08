import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../utils/locales'
import { useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { isBrowser } from '../utils/config'

function parseLocale(maybeSupportedLocale) {
  const lowerMaybeSupportedLocale = maybeSupportedLocale.toLowerCase()
  return SUPPORTED_LOCALES.find(
    (locale) =>
      locale.toLowerCase() === lowerMaybeSupportedLocale ||
      locale.split('-')[0] === lowerMaybeSupportedLocale
  )
}

export function navigatorLocale() {
  if (!isBrowser) return undefined

  try {
    const [language, region] = navigator.language.split('-')

    if (region) {
      return (
        parseLocale(`${language}-${region.toUpperCase()}`) ??
        parseLocale(language)
      )
    }

    return parseLocale(language)
  } catch (error) {
    console.error(error)
  }
}

export function useActiveLocale() {
  const [lang, setLang] = useLocalStorage('lang', undefined)

  const userLocale = lang // From local storage - useUserLocale()
  const activeLocale = useMemo(() => {
    return userLocale || navigatorLocale() || DEFAULT_LOCALE
  }, [userLocale])

  return {
    activeLocale,
    setActiveLocale: setLang
  }
}
