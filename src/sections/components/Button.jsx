const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-monserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : " ${fullWidth && 'w-full'} bg-coral-red rounded-full text-white border-coral-red"
        } `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
