import { createContext, useContext, useEffect, useState } from 'react'
import * as authApi from '../api/authApi'


const AuthContext = createContext(null)


export function AuthProvider({ children }) {
const [user, setUser] = useState(null)
const [token, setToken] = useState(localStorage.getItem('token') || null)
const [loading, setLoading] = useState(true)


useEffect(() => {
async function bootstrap() {
try {
if (token) {
const profile = await authApi.me()
setUser(profile)
}
} catch (e) {
console.error(e)
logout()
} finally {
setLoading(false)
}
}
bootstrap()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


function login({ token, user }) {
localStorage.setItem('token', token)
setToken(token)
setUser(user)
}


function logout() {
localStorage.removeItem('token')
setToken(null)
setUser(null)
}


return (
<AuthContext.Provider value={{ user, token, login, logout, loading }}>
{children}
</AuthContext.Provider>
)
}


export const useAuth = () => useContext(AuthContext)