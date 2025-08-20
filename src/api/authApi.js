import axios from 'axios'


const API = axios.create({
baseURL: 'http://localhost:5000/api/auth',
headers: { 'Content-Type': 'application/json' }
})


API.interceptors.request.use((config) => {
const token = localStorage.getItem('token')
if (token) config.headers.Authorization = `Bearer ${token}`
return config
})


export async function login(payload) {
const { data } = await API.post('/login', payload)
return data // { token, user }
}


export async function register(payload) {
const { data } = await API.post('/register', payload)
return data // { token, user }
}


export async function me() {
const { data } = await API.get('/me')
return data // user
}