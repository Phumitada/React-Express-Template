import { toast } from 'sonner'

export const useErrorHandler = () => {
  const handleError = (error: any, customMessage?: string) => {
    const status = error.response?.status
    const message = error.response?.data?.message || customMessage || 'An error occurred'
    if (status !== 401) {
      console.error('Error:', error)
    }
    switch (status) {
      case 400:
        toast.error(message || 'Invalid request')
        break
      case 403:
        toast.error('Access denied')
        break
      case 404:
        toast.error('Resource not found')
        break
      case 500:
        toast.error('Server error. Please try again.')
        break
      default:
        toast.error(message)
    }
  }

  return { handleError }
}
