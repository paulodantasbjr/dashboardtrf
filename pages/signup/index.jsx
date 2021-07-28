import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../store/globalState'
import { postData } from '../../utils/fetchData'
import { Layout } from '../../design/layouts/sign'
import ContainerStyled from './styled'
import { valid } from '../../utils/valid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TextField } from '@material-ui/core'
import { SubmitButton } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Sign } from '../../components/Sign'

export default function SignUp() {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const { state, dispatch } = useContext(DataContext)

  const { auth } = state

  const router = useRouter()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/register', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  return (
    <Layout>
      <ContainerStyled>
        <Sign />
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <div className='form-field'>
            <TextField
              label='Digite seu nome*'
              id='name'
              variant='outlined'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <TextField
              label='Digite seu e-mail*'
              id='email'
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
              variant='outlined'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <TextField
              label='Confirme sua senha*'
              id='cf_password'
              variant='outlined'
              name='cf_password'
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <SubmitButton type='submit'>Entrar</SubmitButton>
          </div>
          <div className='form-link'>
            <p>
              Já tem cadastro?
              <span>
                <Link href='/signin'>
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
