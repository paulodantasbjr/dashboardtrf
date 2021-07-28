import Head from 'next/head'

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Dashboard - TRF</title>
      </Head>
      <div>
        <p>menu lateral direito</p>
      </div>
      <div>{children}</div>
      <div>
        <p>menu lateral esquerdo</p>
      </div>
    </div>
  )
}
