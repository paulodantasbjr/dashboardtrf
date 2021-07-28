import { FooterStyled } from './styled'
import Link from 'next/link'

export const Footer = () => {
  return (
    <FooterStyled>
      <p>
        @2021 |
        <Link href='https://portfolio-paulodantasrj.vercel.app/'>
          <a> Paulo Dantas</a>
        </Link>
      </p>
    </FooterStyled>
  )
}
