import { useState } from 'react'

export function useLoader() {
  const [loading, setLoading] = useState(true)

  const stopLoading = () => setLoading(false)

  const startLoading = () => setLoading(true)

  return {
    loading,
    stopLoading,
    startLoading
  }
}
