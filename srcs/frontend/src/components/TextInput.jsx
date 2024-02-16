import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

export default function TextInput({
  label,
  hideLabel,
  type,
  id,
  placeholder,
  size,
  onChange,
  onBlur,
  value,
  list,
}) {
  return (
    <div className={styles.textInput}>
      <label
        htmlFor={id}
        className={hideLabel ? styles.hideLabel : styles.label}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={styles.input}
        size={size}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        list={list ? list : null}
      />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  list: PropTypes.string,
};

TextInput.defaultProps = {
  hideLabel: false,
  size: "30",
  list: "",
};
