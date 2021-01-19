import { createElement } from './react/index.js'

// devolverá estilos interpolados
function buildStyles(strings, dynamicValues, props) {
    let style = strings.slice() // haciendo copia del string
    dynamicValues.forEach((value, index) => {
        style[index] += value(props)
    })
    return style.join('')
}

function createStyledApi(htmlTag) {
    return (strings, ...dynamicValues) => {
        return (props, content) => {
            const style = buildStyles(strings, dynamicValues, props)
            return createElement(htmlTag, {
                ...props,
                style,
            } ,content)
        }
    } 
}

const tags = ["h1","h2","h3","p","div","img","footer","header","article","form","input","button","select","section"];

function createObjectStyled(tags) {
    return tags.reduce((acc, tag) => {
        // acc -> valor inicial {}
        let attr = tag
        let newObj = { ...acc }
        newObj[attr] = createStyledApi(tag)
        return newObj
    },{});
} 

const styled = createObjectStyled(tags);

export default styled