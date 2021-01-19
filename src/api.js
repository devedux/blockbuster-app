import { API_KEY, TOKEN } from './components/constants.js'

class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }

    baseAPI = 'https://api.themoviedb.org/3/'
    
    get discoverMovie() {
        return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`
    }

    async moviePage(page) {
        try {
            let response = await fetch(`${this.discoverMovie}&page=${page}`)
            let data = await response.json()
            console.log(data)
            return data            
        } catch (error) {
            console.log(error,'error')
            throw error
        }    
    }
}

export default new API(API_KEY)