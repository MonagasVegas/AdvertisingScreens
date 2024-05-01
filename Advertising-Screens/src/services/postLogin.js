import axios from 'axios'
import { urlFetch } from '../constants'

export const postLogin = (body) => {
    return axios({
        method: 'POST',
        url: `${urlFetch}/login`,
        data: body
    })
}