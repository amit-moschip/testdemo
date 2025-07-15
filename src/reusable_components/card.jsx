const Card = ({
  text,
  icon,
  className = '',
  textClassName = '',
  iconClassName = '',
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group h-[120px] bg-[#1E1E2F] rounded-lg flex flex-col items-center justify-center shadow-md cursor-pointer transition
        ${isSelected ? 'border-2 border-[#C5D86D]'  : ''} ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt="card-icon"
          className={`w-8 h-8 mb-2 transition duration-300 filter 
            ${isSelected
              ? 'brightness-0 invert sepia saturate-[400%] hue-rotate-[60deg]' 
              : 'brightness-0 invert text-green-400'} 
            ${iconClassName}`}
        />
      )}
      <p className={`text-white text-sm text-center ${textClassName}`}>{text}</p>
    </div>
  );
};



export default Card;
