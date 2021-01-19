class Component {
 
    constructor(props = {}, state = {}) {
        this.props = props
        this.state = state
    }

    update() {}
    
    #updater () {
        this.update(this.render())
        this.componentDidUpdate()
    }

    // se llama antes que se renderice el componente
    componentWillMount() {

    }

    //se llama cuando ya se renderice el componente
    componentDidMount() {

    }

    //se llama cuando se actualiza alguna parte del componente
    componentDidUpdate() {

    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }
        this.#updater()
    }

    // va a armar cosas
    build() {
        this.componentWillMount()
        return this.render()
    }

}

export {
    Component
}