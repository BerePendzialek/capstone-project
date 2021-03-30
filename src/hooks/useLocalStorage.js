import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from '../lib/localStorage'

export default function useLocalStorage(key, initialData) {
  const [data, setData] = useState(loadFromLocal(key) ?? initialData)

  useEffect(() => {
    saveToLocal(key, data)
  }, [data, key])

  return [data, setData]
}
