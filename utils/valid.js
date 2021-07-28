const validateEmail = (email) => {
  //expressao regular para validar email
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email) //funcao para testar a expressao regular
}

export const valid = (name, email, password, cf_password) => {
  //verifica se existe algo digitado
  if (!name || !email || !password) return 'Por favor preencha todos os campos.'

  //verificar se o email digitado foi valido
  if (!validateEmail(email)) return 'email invalido.'

  //verifica se a senha tem mais de 6 caracter
  if (password.length < 6) return 'Senha deve ter pelo menos 6 caracteres.'

  //verifica se a senha bate com o confirma senha
  if (password !== cf_password) return 'Senha nao estao iguais.'
}
