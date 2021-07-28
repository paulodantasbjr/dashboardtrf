import { connectDB } from '../../../utils/connectDB'
import Users from '../../../model/userModel'
import jwt from 'jsonwebtoken'
import { createAccessToken } from '../../../utils/generateToken'

//abre uma instancia do banco
connectDB()

export default async (req, res) => {
  try {
    //verifica se existe um refreshtoken nos cookies
    const rf_token = req.cookies.refreshtoken
    if (!rf_token) return res.status(400).json({ err: 'Logue Por Favor!' })

    //verifica se o refreshtoken é igual ao refreshtoken do projeto
    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
    if (!result)
      return res
        .status(400)
        .json({ err: 'Seu token esta incorreto ou expirado.' })

    //verifica se acha no banco alguem com o id = ao id do result
    const user = await Users.findById(result.id)
    if (!user) return res.status(400).json({ err: 'Usuario nao existe.' })

    //cria o token baseado no id do banco
    const access_token = createAccessToken({ id: user._id })

    //retorna o token e o user criado
    res.json({
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
