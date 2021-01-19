import { render } from '../../react-dom.js'

function renderChildren(children, container) {
    if (Array.isArray(children)) {
       return children.forEach(child => render(child, container))
    }
    return render(children, container)
}

function setEvents(element,event,callback) {
    return element.addEventListener(event,callback)
}

function setProperties(prop, value, element) {
    // events support
    if (prop.startsWith('on')) { //si la prop inicia con 'on' -> startsWith: propiedad de los string
        const event = prop.replace('on','').toLowerCase()
        return setEvents(element, event, value)
    }
    // support for children
    if (prop === 'children') {
        return renderChildren(value,element)
    }

    // support for attributes
    const attribute = value
    return element.setAttribute(prop, attribute)
}

export function createElement(type, props, content) {
    // creando tipo de elemento
    const element = document.createElement(type)

    // contenido
    if (content) {
        element.textContent = content
    }

    // Propiedades
    if (props) {
        Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))
    }

    return element
}

