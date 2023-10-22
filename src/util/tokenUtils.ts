import jwtDecode from "jwt-decode"

interface IToken {
  sub: string
  iat: number
}

export const getTokenUser =  (token: string) => {
  const {sub} =  jwtDecode<IToken>(token)

  return sub
}
