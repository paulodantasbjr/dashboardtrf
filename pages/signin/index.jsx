import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../store/globalState'
import { postData } from '../../utils/fetchData'
import { Layout } from '../../design/layouts/sign'
import ContainerStyled from './styled'
import { Sign } from '../../components/Sign'
import Link from 'next/link'
import { TextField } from '@material-ui/core'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

export default function Signin() {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleForgotPassword = () => {
    dispatch({
      type: 'NOTIFY',
      payload: { info: 'Contacte o administrador do sistema ' },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/login', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user,
      },
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7,
    })

    localStorage.setItem('firstLogin', true)
    router.push('/dashboard')
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/dashboard')
  }, [auth])

  return (
    <Layout>
      <ContainerStyled>
        <Sign />
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='form-field'>
            <TextField
              label='Digite seu e-mail*'
              name='email'
              id='email'
              type='email'
              variant='outlined'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <TextField
              label='Digite sua senha*'
              id='password'
              name='password'
              type='password'
              variant='outlined'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <Button>Entrar</Button>
          </div>
          <div className='form-link'>
            <p>
              Esqueceu a senha?
              <span>
                <Link href=''>
                  <a onClick={handleForgotPassword}>clique aqui</a>
                </Link>
              </span>
            </p>
            <p>
              Não tem cadastro?
              <span>
                <Link href='/signup'>
                  <a>clique aqui</a>
                </Link>
              </span>
            </p>
          </div>
        </form>
        <Footer />
      </ContainerStyled>
    </Layout>
  )
}
