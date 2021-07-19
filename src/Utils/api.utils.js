import axios from 'axios';
import { getLocalStorage } from './authorization';

const axiosInstance = axios.create({
    headers:{"content-type":"application/json"}
})

const baseUrl = "http://localhost:8080/"
export const api = async ({method="get",url="",body=""}) => {
    return await new Promise((resolve,reject) => {
        axiosInstance.defaults.headers.common['Authorization'] = getLocalStorage('token') ? `Bearer ${getLocalStorage('token')}` : ""
        axiosInstance[method](`${baseUrl}${url}`, body?body:"")
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })

    })
}