import { connectDB } from '../../../utils/connectDB'
import Users from '../../../model/userModel'
import bcrypt from 'bcrypt'
import {
  createAccessToken,
  createRefreshToken,
} from '../../../utils/generateToken'
import Cors from 'cors'

//abre uma instancia do banco
connectDB()

//para o registro ser somente via post
export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res)
      break
  }
}

const login = async (req, res) => {
  try {
    //pega os dados que foi digitado no front
    const { email, password } = req.body

    //verifica se acha no banco alguem com o email igual ao digitado
    const user = await Users.findOne({ email })
    if (!user) return res.status(400).json({ err: 'Usuario nao existe.' })

    //verifica se a senha digitada é igual ao do banco
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

    //cria o token
    const access_token = createAccessToken({ id: user._id })
    //cria o refresh token
    const refresh_token = createRefreshToken({ id: user._id })

    //envia msg os tokens e o user com as informaçoes do banco
    res.json({
      msg: 'Logado com sucesso!',
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}
