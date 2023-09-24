import { config } from 'shared/utils/config/app-config'

const API_URL = config.api_url

export interface HttpClient {
  getAll<T>(collection: string): Promise<T>
  create<T>(collection: string, data: object): Promise<T>
}

export class HttpClientAdapter implements HttpClient {
  getAll = <T>(collection: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}${collection}`)
        .then((res) => res)
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err))
    })
  }

  create = <T>(collection: string, data: object): Promise<T> => {
    return new Promise((resolve, reject) =>
      fetch(`${API_URL}${collection}`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then((res) => resolve(res.json()))
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    )
  }
}
