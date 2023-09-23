import { config } from 'shared/utils/config/app-config'

const API_URL = config.api_url

export interface HttpClient {
  getAll(collection: string): Promise<unknown>
  create(collection: string, data: object): Promise<void>
}

export class HttpClientAdapter implements HttpClient {
  getAll = (collection: string) => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}${collection}`)
        .then((res) => res)
        .then((res) => resolve(res.json()))
        .catch((err) => reject(err))
    })
  }

  async create(collection: string, data: object) {
    fetch(`${API_URL}${collection}`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  }
}
