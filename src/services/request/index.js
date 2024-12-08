import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/store/modules/main'
const mainStore = useMainStore()
class YCRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use((config) => {
      mainStore.isLoading = true
       
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(response => {
      mainStore.isLoading = false
      return response
    }, err => {
      mainStore.isLoading = false
      return err
    })

  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new YCRequest(BASE_URL, TIMEOUT)


