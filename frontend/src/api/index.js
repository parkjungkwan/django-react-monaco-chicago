import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/'
const headers = {'Content-Type': 'application/json'}


export const memberDetail = body => axios.post(`${SERVER}member/detail`,{headers, body})
export const memberDelete = body => axios.post(`${SERVER}member/delete`,{headers, body})
export const memberList = body => axios.post(`${SERVER}member/list`,{headers, body})
export const MemberModify = body => axios.post(`${SERVER}member/modify`,{headers, body})
export const memberRegister = body => axios.post(`${SERVER}member/register`,{headers, body})
export const memberRetrieve = body => axios.post(`${SERVER}member/retrieve`,{headers, body})
export const memberLogin = body => axios.post(`${SERVER}member/login`,{headers, body})
