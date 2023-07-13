import { IAuth } from '../interfaces'

export const localStorages = {
  getToken: (): any => localStorage.getItem('token'),
  setToken: (token: string): void => localStorage.setItem('token', token),
  removeToken: () => localStorage.removeItem('token'),
  getCurrentUser: (): IAuth => JSON.parse(localStorage.getItem('current-user') as any),
  setCurrentUser: (data: IAuth): void => localStorage.setItem('current-user', JSON.stringify(data)),
  removeCurrentUser: (): void => localStorage.removeItem('current-user'),
}
