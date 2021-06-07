import * as React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useLanguageContext } from '../../i18n'
import { localeOptions } from '../../utils/locales'

// export const LanguageSelector = () => {
//   const { locale, setLocale } = useLanguageContext()

//   const onSelectLocale = (ev) => {
//     const selected = ev.target.value
//     setLocale(selected)
//   }

//   return (
//     <>
//       <select
//         onChange={onSelectLocale}
//         className='inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out bg-transparent border border-gray-400 rounded-md active:bg-gray-50 active:text-gray-200'
//       >
//         {localeOptions.map((x) => (
//           <option value={x.locale} selected={x.locale === locale}>
//             <img src={x.countryFlag} alt={x.locale} /> {x.locale.split('-')[0].toUpperCase()}
//           </option>
//         ))}
//       </select>
//     </>
//   )
// }

const LanguageOption = ({ option }) => {
  return (
    <div className='inline-flex items-center gap-2'>
      <img className='w-7' src={option.countryFlag} alt={option.locale} />
      <span>{option.locale.split('-')[0].toUpperCase()}</span>
    </div>
  )
}

const SelectorIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      class='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
      aria-hidden='true'
    >
      <path
        fill-rule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clip-rule='evenodd'
      ></path>
    </svg>
  )
}

export const LanguageSelector = () => {
  const [selected, setSelected] = useState(localeOptions[0])
  const { locale, setLocale } = useLanguageContext()

  React.useEffect(() => {
    setLocale(selected.locale)
  }, [selected])

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-gray-900 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
            <LanguageOption option={selected} />
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {localeOptions.map((opt, optIdx) => (
                <Listbox.Option
                  key={optIdx}
                  className={({ active }) =>
                    `${active ? 'bg-gray-700' : 'text-gray-200'}
                          cursor-default select-none relative py-2 px-4`
                  }
                  value={opt}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'text-white font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        <LanguageOption option={opt} />
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
