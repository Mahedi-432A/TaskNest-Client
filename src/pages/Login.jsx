import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as authApi from '../api/authApi'
import { useAuth } from '../context/AuthContext'


export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
const navigate = useNavigate()
const location = useLocation()
const { login } = useAuth()


const from = location.state?.from?.pathname || '/dashboard'


async function handleSubmit(e) {
e.preventDefault()
try {
const data = await authApi.login({ email, password })
login(data)
navigate(from, { replace: true })
} catch (err) {
console.error(err)
setError('Invalid credentials')
}
}


return (
<div className="max-w-md mx-auto p-6 border rounded">
<h1 className="text-2xl font-bold mb-4">Login</h1>
<form onSubmit={handleSubmit} className="space-y-3">
<input className="w-full p-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
{error && <p className="text-red-600 text-sm">{error}</p>}
<button className="w-full p-2 bg-blue-600 text-white rounded" type="submit">Login</button>
</form>
<p className="text-sm mt-3">No account? <Link className="text-blue-600" to="/register">Register</Link></p>
</div>
)
}