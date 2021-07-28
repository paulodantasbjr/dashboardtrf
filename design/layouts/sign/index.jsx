import Head from 'next/head'
import { ContainerStyled } from './styled'

export const Layout = ({ children }) => {
  return (
    <ContainerStyled>
      <Head>
        <title>Dashboard - TRF</title>
      </Head>
      <div className='content'>{children}</div>
    </ContainerStyled>
  )
}
