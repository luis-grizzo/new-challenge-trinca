import { Tooltip } from 'react-tooltip'

import { generateId } from '@/shared/lib'

import * as S from './styles'

type CheckboxProps = {
  label: string
  labelClassName?: string
  infoIcon?: {
    icon: React.ReactNode
    message: string
  }
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox = ({
  label,
  labelClassName,
  infoIcon,
  className,
  ...props
}: CheckboxProps): React.ReactElement => {
  const linkInputLabel =
    label.replace(/\W/g, '').toLowerCase() + String(generateId())

  return (
    <S.Wrapper>
      <input
        id={linkInputLabel}
        type="checkbox"
        className={`w__checkbox ${className ?? ''}`}
        {...props}
      />
      <label
        role="label"
        htmlFor={linkInputLabel}
        className={`w__label ${labelClassName ?? ''}`}
      >
        {label}
      </label>
      {infoIcon && (
        <>
          <span
            role="icon"
            data-tooltip-id="info-icon"
            data-tooltip-content={infoIcon.message}
            data-place="top"
          >
            {infoIcon.icon}
          </span>
          <Tooltip id="info-icon" className="global__tooltip" />
        </>
      )}
    </S.Wrapper>
  )
}
