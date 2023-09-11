import { NumberFormatBase, NumberFormatBaseProps } from 'react-number-format'

import { formatAmount } from '@/shared/utils'

type CurrencyInputProps = {
  label: string
  description: string | null
  onChange?: (value: number) => void
} & Omit<NumberFormatBaseProps, 'onChange'>

import * as S from './styles'

export const CurrencyInput = ({
  label,
  description,
  onChange,
  ...props
}: CurrencyInputProps): React.ReactElement => {
  const linkInputLabel = label.replace(/\W/g, '').toLowerCase()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.replace(/[-R$.,]/g, '') === ''
        ? 0
        : parseInt(e.target.value.replace(/[-R$.,]/g, ''))

    return onChange?.(value)
  }

  return (
    <S.Wrapper>
      <label htmlFor={linkInputLabel} className="w__label">
        {label}
      </label>

      <NumberFormatBase
        type="tel"
        id={linkInputLabel}
        defaultValue={0}
        valueIsNumericString
        format={(value) => formatAmount(parseInt(value) / 100)}
        onChange={handleOnChange}
        className="w__input"
        {...props}
      />

      {description && <span className="w__description">{description}</span>}
    </S.Wrapper>
  )
}
