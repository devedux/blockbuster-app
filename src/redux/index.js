const createStore = (reducer, initialState) => {
    let state = initialState
    let updater = () => {}
    const getState = _ => state

    const dispatch = (action) => {
        state = reducer(state, action)
        updater()
    }

    const suscribe = (listener) => {
        updater = listener
    }

    return {
        getState,
        dispatch,
        suscribe
    }
}

// function combineReducers() {} -> tarea

export { 
    createStore,
    // combineReducers 
}