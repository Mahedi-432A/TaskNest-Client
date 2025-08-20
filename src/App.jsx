import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import ProtectedRoute from './components/ProtectedRoute'


export default function App() {
return (
<div className="container mx-auto p-4">
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />


<Route
path="/"
element={<Navigate to="/dashboard" replace />}
/>


<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>


<Route
path="/tasks"
element={
<ProtectedRoute>
<Tasks />
</ProtectedRoute>
}
/>


<Route path="*" element={<Navigate to="/dashboard" replace />} />
</Routes>
</div>
)
}