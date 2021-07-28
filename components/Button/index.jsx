import Link from 'next/link'
import { LinkButtonStyled, SubmitButtonStyled } from './styled'

export const LinkButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <LinkButtonStyled>{children}</LinkButtonStyled>
    </Link>
  )
}

export const SubmitButton = ({ children }) => {
  return <SubmitButtonStyled>{children}</SubmitButtonStyled>
}
