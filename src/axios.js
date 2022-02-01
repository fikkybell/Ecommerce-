import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => 
        Promise.reject(
            (error.response && error.response.data) || {message: 'Something went wrong!'}
        )
)

export default axiosInstance