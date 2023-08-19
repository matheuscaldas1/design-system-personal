import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
