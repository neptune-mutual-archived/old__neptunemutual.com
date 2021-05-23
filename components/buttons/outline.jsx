import { classNames } from '../../utils/classnames'

export const OutlineLink = ({
  children,
  className,
  external,
  href,
  wide,
  ...rest
}) => {
  const props = {
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    ...rest
  }

  return (
    <a
      href={href}
      className={classNames(
        'text-blue-400 border border-blue-400 rounded uppercase leading-none font-semibold text-sm tracking-wide whitespace-nowrap',
        wide ? 'px-16 py-3' : 'px-4 py-2',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
