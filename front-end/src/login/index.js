import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/login',
})

export const insertUser = payload => api.post(`/newUser`, payload)
export const getAllUsers = () => api.get(`/get`)
export const updateUserById = (id, payload) => api.put(`/update/${id}`, payload)
export const deleteUserById = id => api.delete(`/delete/${id}`)
export const getUserById = id => api.get(`/get/${id}`)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis