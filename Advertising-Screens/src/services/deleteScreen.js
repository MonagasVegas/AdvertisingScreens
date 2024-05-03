import axios from 'axios'
import { urlFetch } from '../constants'

export const deleteScreen = (id, token) => {
    return axios({
        method: 'DELETE',
        url: `${urlFetch}/display/${id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
    })
}