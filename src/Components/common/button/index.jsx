import PropTypes from "prop-types";

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded-md font-semibold transition-all duration-300 text-xs md:text-sm";
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary ",
    secondary:
      "border bg-black border-primary text-white hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
