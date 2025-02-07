import axios from "axios"

let movieApiUrl=import.meta.env.VITE_MOVIES_API
let saveApiUrl=import.meta.env.VITE_SAVE_API

export const  movieApi=axios.create({
    baseURL:movieApiUrl
})


export const  saveApi=axios.create({
    baseURL:saveApiUrl
})

