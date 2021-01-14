import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const req =
        useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
            setLoading(true)
            try {
                const res = await fetch(url, {
                    method,
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json; charset=utf-8'}
                })

                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.message || 'Что-то пошло не так')
                }
                setLoading(false)
                return data
            } catch (e) {
                setLoading(false)
                setError(e.message)
                throw e
            }
        }, [])
    const clearError = useCallback(() => setError(null), [])
    return {loading, req, error, clearError}
}

