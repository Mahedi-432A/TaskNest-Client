import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Dashboard() {
const { user, logout } = useAuth()
return (
<div>
<div className="flex justify-between items-center mb-4">
<h1 className="text-2xl font-bold">Dashboard</h1>
<div className="flex items-center gap-3">
<span className="text-sm">{user?.name || user?.email}</span>
<button className="px-3 py-1 border rounded" onClick={logout}>Logout</button>
</div>
</div>
<div className="space-x-3">
<Link className="underline" to="/tasks">Go to Tasks</Link>
</div>
</div>
)
}