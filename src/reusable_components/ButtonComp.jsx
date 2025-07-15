const Button = ({ buttonValue }) => {
    return (
        <button
            type={buttonValue.type}
            className={`flex items-center justify-center py-2 rounded text-sm ${buttonValue.class.Divclass}`}
        >
            <span className={`flex items-center gap-2${buttonValue.class.textClassName}`}>
                {buttonValue.buttonIcon}
                {buttonValue.buttonName}
            </span>
        </button>
    );
};

export default Button;