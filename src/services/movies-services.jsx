
import { movieApi } from "../api"
let key=import.meta.env.VITE_KEY_API
export const getmoviesSearch=async(text="spider")=>{
    const res=await movieApi.get(`/?s=${text}&apikey=${key}`)
    if(!res.data){
        throw new Error("no data")
    }
    return res.data
}


export const getSinglemovie=async(id)=>{
    const res=await movieApi.get(`/?i=${id}&apikey=${key}`)
    if(!res.data){
        throw new Error("no data")
    }
    return res.data
}