import axios from 'axios'
import { urlFetch } from '../constants' 

export const getScreens = (pageSize,offset,token) => {
    return axios({
        method: 'GET',
        url: `${urlFetch}/display?pageSize=${pageSize}&offset=${offset}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
    })
}