import countryByFlag from 'country-json/src/country-by-flag.json'

export const getFlag = (country) => {
  return countryByFlag.find((x) => x.country === country).flag_base64
}

export const countries = countryByFlag.map((x) => x.country)
