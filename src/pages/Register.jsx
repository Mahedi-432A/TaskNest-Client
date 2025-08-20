import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authApi from '../api/authApi'
import { useAuth } from '../context/AuthContext'


export default function Register() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
const navigate = useNavigate()
const { login } = useAuth()


async function handleSubmit(e) {
e.preventDefault()
try {
const data = await authApi.register({ name, email, password })
login(data)
navigate('/dashboard', { replace: true })
} catch (err) {
console.error(err)
setError('Registration failed')
}
}


return (
<div className="max-w-md mx-auto p-6 border rounded">
<h1 className="text-2xl font-bold mb-4">Register</h1>
<form onSubmit={handleSubmit} className="space-y-3">
<input className="w-full p-2 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
<input className="w-full p-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
{error && <p className="text-red-600 text-sm">{error}</p>}
<button className="w-full p-2 bg-green-600 text-white rounded" type="submit">Create account</button>
</form>
<p className="text-sm mt-3">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
</div>
)
}