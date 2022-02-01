import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import MatxLoading from '../components/Matxloading'
import axiosInstance from "../axios";


const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null
}

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    console.log(decodedToken)
    return decodedToken.exp > currentTime
}

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
        localStorage.removeItem('accessToken')
        delete axiosInstance.defaults.headers.common.Authorization
    }
}

// const getfilteredNavigations = (navList = [], authorities) => {
//     return navList.reduce((array, nav) => {
//         if (nav.auth) {
//             if (nav.auth.some(r=> authorities.includes(r))) {
//                 array.push(nav)
//             }
//         } else {
//             if (nav.children) {
//                 nav.children = getfilteredNavigations(nav.children, authorities)
//                 array.push(nav)
//             } else {
//                 array.push(nav)
//             }
//         }
//         return array
//     }, [])
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
       
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (username, password) => {
        const response = await axiosInstance.post('/api/auth/signin', {
            username,
            password,
        })
        const { accessToken, user } = response.data
        console.log(user)
        setSession(accessToken)

        // let filteredNavigations = getfilteredNavigations(navigations, user.authorities)

        // dispatch({
        //     type: 'SET_USER_NAVIGATION',
        //     payload: [...filteredNavigations],
        // })

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
    }

    const register = async (email, username, password) => {
        const response = await axiosInstance.post('/api/auth/signup', {
            email,
            username,
            password,
        })

        const { accessToken, user } = response.data

        setSession(accessToken)

        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ;(async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken')

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken)
                    const response = await axiosInstance.get('/api/auth/username')
                    const { user } = response.data

                    // let filteredNavigations = getfilteredNavigations(navigations, user.authorities)

                    // dispatch({
                    //     type: 'SET_USER_NAVIGATION',
                    //     payload: [...filteredNavigations],
                    // })

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
