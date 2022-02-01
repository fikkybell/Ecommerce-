import { useContext } from 'react'
import AuthContext from '../contexts/JwtAuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth