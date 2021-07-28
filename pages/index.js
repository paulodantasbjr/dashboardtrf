import { useEffect } from 'react'
import Dashboard from './dashboard'
import Cookie from 'js-cookie'
import Router from 'next/router'

export default function Home() {
  const cookie = Cookie.get('refreshtoken')

  useEffect(() => {
    if (!cookie) {
      Router.replace('/signin')
    }
  }, [])

  return (
    <>
      <Dashboard />
    </>
  )
}
