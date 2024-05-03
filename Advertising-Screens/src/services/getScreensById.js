import axios from 'axios'
import { urlFetch } from '../constants'

export const getScreensById = (id, token) => {
    return axios({
        method: 'GET',
        url: `${urlFetch}/display/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
    })
}