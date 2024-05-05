import axios from 'axios'
import { urlFetch } from '../constants'

export const postScreen = (body, token) => {
    return axios({
        method: 'POST',
        url: `${urlFetch}/display`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
    })
}