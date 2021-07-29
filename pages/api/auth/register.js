import { connectDB } from '../../../utils/connectDB'
import Users from '../../../model/userModel'
import { valid } from '../../../utils/valid'
import bcrypt from 'bcrypt'

connectDB()

//para o registro ser somente via post
export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
  }
}

const register = async (req, res) => {
  try {
    //pega os dados que foi digitado no front
    const { name, email, password, cf_password } = req.body

    //valida os dados
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return res.status(400).json({ err: errMsg })

    //verifica se existe no banco alguem com o email
    const user = await Users.findOne({ email })
    if (user) return res.status(400).json({ err: 'Esse email ja existe.' })

    //cria o hash da senha
    const passwordHash = await bcrypt.hash(password, 12)

    //cria o arquivo para salvar no banco
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    })
    //sava no banco
    await newUser.save()
    res.status(200).json({ msg: 'Cadastro realizado com sucesso!' })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}
