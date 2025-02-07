export function addtofavaction(payload){
    return {
        type: 'ADD_TO_FAV',
        payload
    }
}

export function removetofavaction(payload){
    return {
        type: 'REMOVE_FROM_FAV',
        payload
    }
}