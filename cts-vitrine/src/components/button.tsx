function Button(props){
    return (
        <button>
            <a href={props.link}>{props.title}</a>
        </button>
    )
}

export default Button;

