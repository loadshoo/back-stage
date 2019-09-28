
import axios from './axios.js'

// const baseUrl = 'http://127.0.0.1';

export const getArticle = (params) => {
    return axios('post', '/api/home/back/getArticle', params)
}

export const login = (params) => {
    return axios('post', '/api/login', params, {'Authorization': 'Bearer'})
}