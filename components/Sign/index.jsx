import Image from 'next/image'
import { SignStyled, ImageStyled, DescripitionStyled } from './styled'

export const Sign = () => {
  return (
    <SignStyled>
      <ImageStyled>
        <Image src='/img/logo.png' width='52px' height='52px' />
        <span>Dashboard TRF</span>
      </ImageStyled>
      <DescripitionStyled>
        <p>Sistema feito para auxiliar a analista de qualidade. </p>
      </DescripitionStyled>
    </SignStyled>
  )
}
