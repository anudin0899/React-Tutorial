const Button = ({ onClick, title, customClass }) => {
    return (
        <button className={customClass} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button