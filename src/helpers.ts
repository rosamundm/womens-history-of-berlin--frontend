export const getFunctionsUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:5555/.netlify/functions/'
    }
    return '/.netlify/functions/'
}

export const loadAddress = () => {
    return [
        process.env.REACT_APP_IMPRESSUM_ADDRESS_FIRST_LINE,
        process.env.REACT_APP_IMPRESSUM_ADDRESS_SECOND_LINE,
        process.env.REACT_APP_IMPRESSUM_ADDRESS_THIRD_LINE,
    ]
}

export const loadEmailAddress = () => {
    return process.env.REACT_APP_OWNER_EMAIL
}