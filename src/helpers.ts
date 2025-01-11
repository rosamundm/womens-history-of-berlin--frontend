export const getFunctionsUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:5555/.netlify/functions/'
    }
    return '/.netlify/functions/'
}