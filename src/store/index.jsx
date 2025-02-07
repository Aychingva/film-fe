import { combineReducers, createStore } from "redux"
import { moviesReducer } from "./reducers/movies.reducer"
import { favoriteReducers } from "./reducers/favorite.reducer"

const reducers=combineReducers({
    movies:moviesReducer,

    favlist:favoriteReducers
})

export const globalState=createStore(reducers)

