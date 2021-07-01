import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}

export const memberRegister = body => axios.post(`${SERVER}member/register`,{headers, body})
export const memberLogin = body => axios.post(`${SERVER}member/login`,{headers, body})
