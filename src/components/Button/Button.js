const Button = (props) => {
    return <button onClick={props.click} style={{backgroundColor: props.bgcolor}}>{props.label}</button>
}

export default Button 