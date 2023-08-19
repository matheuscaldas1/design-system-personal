import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
