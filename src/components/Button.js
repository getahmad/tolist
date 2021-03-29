import "../assets/css/Button.css";
import PropTypes from "prop-types";

const Button = ({ text, variant, action }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
