export const setupConsoleFilter = () => {
  const originalConsoleError = console.error
  
  console.error = (...args: any[]) => {
    const has401Error = args.some(arg => {
      if (typeof arg === 'string') {
        return arg.includes('401') || arg.includes('Unauthorized')
      }
      if (typeof arg === 'object' && arg !== null) {
        return (
          arg?.response?.status === 401 ||
          arg?.status === 401 ||
          arg?.message?.includes('401') ||
          arg?.message?.includes('Unauthorized')
        )
      }
      return false
    })
    if (!has401Error) {
      originalConsoleError(...args)
    }
  }
  return originalConsoleError
}

export const restoreConsole = (originalConsoleError: typeof console.error) => {
  console.error = originalConsoleError
}
