import http from '@/service/request'
import * as T from './interface'

export const checkLoginAPI = () => http.get<T.accountModel>('/login')
