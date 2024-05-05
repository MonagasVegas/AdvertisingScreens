import axios from 'axios'
import { urlFetch } from '../constants'

export const putScreen = (id, body, token) => {
    return axios({
        method: 'PUT',
        url: `${urlFetch}/display/${id}`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
    })
}