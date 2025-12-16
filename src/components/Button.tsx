const Button = ({
  label,
  btnStyle = "bg-primary-dark text-accent-lighter hover:ring-4 ring-offset-2",
  type,
  onClick,
  disabled,
}: {
  label: string;
  btnStyle?: string;
  type?: "reset" | "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${btnStyle} w-full text-accent-lighter cursor-pointer font-bold rounded-[3rem] py-8 px-16 transition duration-300 mt-[1.6rem] font-instrument-sans`}
    >
      {label}
    </button>
  );
};

export default Button;
