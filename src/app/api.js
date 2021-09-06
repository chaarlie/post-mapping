const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchData = async path => {
    const data = await fetch(`${API_URL}/${path}`)
    const result = await data.json()
    
    return result
}