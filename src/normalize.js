
function movieListAsMap(newList, oldList = new Map()) {
    return newList.reduce((list, movie) => {
                // set(key,value)
        list.set(movie.id, movie)
        return list
    }, oldList) // {} == Map -> key pueden ser primitivos, hasta una function - tiene metodos como set
}

function getAllIds(list, oldList = []) {
    return oldList.concat(list.map(movie => movie.id))
}

function getMostValuedIds(list, oldList = []) {
    return list.reduce((list, movie) => {
        if(movie.vote_average >= 7) {
            list.push(movie.id)
        }
        return list
    }, oldList)
}

function getLeastValuedIds(list, oldList = []) {
    return list.reduce((list, movie) => {
        if(movie.vote_average < 7) {
            list.push(movie.id)
        }
        return list
    }, oldList)
}

export {
    movieListAsMap,
    getAllIds,
    getMostValuedIds,
    getLeastValuedIds
}

